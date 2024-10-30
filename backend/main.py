from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import database
from classes import Secret

app = FastAPI()
db = database()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/secret/{secret_id}")
async def store_secret(secret_id: str, secret: Secret):
    db.store_secret(secret_id, secret.content, secret.views) 
    return {"message": "Secret stored"}


@app.get("/api/secret/{secret_id}")
async def retrieve_secret(secret_id: str):
    return db.retrieve_secret(secret_id)
