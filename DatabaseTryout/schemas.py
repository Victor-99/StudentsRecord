from fastapi import Query
from pydantic import BaseModel


class StudentTemplate(BaseModel):
    RollNo:int=Query(None,gt=0)
    Name:str=Query(None,max_length=15)
    Hindi:int=Query(0,gt=-1,lt=101)
    English:int=Query(0,gt=-1,lt=101)
    Mathematics:int=Query(0,gt=-1,lt=101)
    Science:int=Query(0,gt=-1,lt=101)
    PhE:int=Query(0,gt=-1,lt=101)
    class Config:
        orm_mode=True