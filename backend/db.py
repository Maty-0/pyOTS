import sqlite3

class database:
    def __init__(self):
        self.conn = sqlite3.connect('secrets.db', check_same_thread=False)
        self.cursor = self.conn.cursor()
        self.cursor.execute(
            '''CREATE TABLE IF NOT EXISTS secrets
            (id TEXT PRIMARY KEY, content TEXT, views INTEGER)'''
        )
        self.conn.commit()
    
    def store_secret(self, secret_id, content, views):
        self.cursor.execute(
            "INSERT INTO secrets (id, content, views) VALUES (?, ?, ?)", 
            (secret_id, content, views)
        )
        self.conn.commit()

    def retrieve_secret(self, secret_id):
        self.cursor.execute("SELECT content, views FROM secrets WHERE id = ?", (secret_id,))
        result = self.cursor.fetchone()
        print(secret_id)
        if result:
            content, views = result
            # Update views if allowed views are remaining
            if views > 1:
                self.update_views(secret_id, views - 1)
                return {"secret": content}
            
            elif views == 1:  # Delete after the last view
                self.cursor.execute("DELETE FROM secrets WHERE id = ?", (secret_id,))
                self.conn.commit()
                return {"secret": content}
            
            else:
                return {"message": "Secret has expired"}
            
        return {"message": "Secret not found"}
    
    def update_views(self, secret_id, views):
        self.cursor.execute("UPDATE secrets SET views = ? WHERE id = ?", (views, secret_id))
        self.conn.commit()