from fastapi.exceptions import HTTPException
from sqlalchemy.orm import Session

from . import models,schemas

def getUsers(db:Session):
    return db.query(models.Student).all()

def getById(id:int,db:Session):
    return db.query(
        models.Student
        ).filter(
            models.Student.RollNo==id
            ).first()

def newData(data:schemas.StudentTemplate,db:Session):
    illegal=getById(data.RollNo,db)
    if illegal:
        raise HTTPException(status_code=400,detail="Cannot be added. Roll Number already exists")
    db_Item=models.Student(**data.dict())
    db.add(db_Item)
    db.commit()

def updateData(Userid:int,data:schemas.StudentTemplate,db:Session):
    legal=getById(Userid,db)
    if not legal:
        raise HTTPException(status_code=404,detail="Cannot be updated. Roll Number does not exists")
    db_Item=models.Student(**data.dict())
    db.query(models.Student).filter(models.Student.RollNo==Userid).update(data.dict())

    #for (key,value) in data.dict().items():
    #    if key=="RollNo":
    #        continue
    #    setattr(legal,key,value)
    db.commit()

def deleteData(id:int,db:Session):
    legal=getById(id,db)
    if not legal:
        raise HTTPException(status_code=404,detail="Cannot delete. Roll Number does not exist")
    db.delete(legal)
    db.commit()