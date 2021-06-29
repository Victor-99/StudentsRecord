from typing import List
from fastapi import FastAPI,Query,Path
from fastapi.param_functions import Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import typing
from fastapi import FastAPI,Depends
from sqlalchemy.orm import Session, session
from . import models,schemas,crud
from .database import engine,sessionLocal

models.Base.metadata.create_all(bind=engine)

app=FastAPI()
origins=[
    "http://localhost:8000",
    "http://127.0.0,1:8000/",
    "http://localhost:4200",

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

def getDb():
    db=sessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get('/',response_model=List[schemas.StudentTemplate])
async def AllMarks(db:Session=Depends(getDb)):
    return crud.getUsers(db)


@app.get('/{id}',response_model=schemas.StudentTemplate)
async def MarksById(id:int,db:Session=Depends(getDb)):
    return crud.getById(id,db)

@app.post('/')
def postMarks(data:schemas.StudentTemplate,db:Session=Depends(getDb)):
    return crud.newData(data,db)

@app.put('/edit/{id}')
def changeData(id:int,data:schemas.StudentTemplate,db:Session=Depends(getDb)):
    return crud.updateData(id,data,db)

@app.delete('/{id}')
def removeData(id:int,db:session=Depends(getDb)):
    return crud.deleteData(id,db)
