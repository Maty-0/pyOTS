from pydantic import BaseModel

class Secret(BaseModel):
    content: str
    views: int