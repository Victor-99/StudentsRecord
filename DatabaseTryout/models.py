from sqlalchemy import Column,Integer,String

from .database import Base

class Student(Base):
    __tablename__="Student"
    RollNo=Column(
        Integer,
        primary_key=True,
        autoincrement=True,
        nullable=False)
    Name=Column(
        String
    )
    Hindi=Column(
        Integer,
        nullable=False
        )
    English=Column(
        Integer,
        nullable=False
        )
    Mathematics=Column(
        Integer,
        nullable=False
        )
    Science=Column(
        Integer,
        nullable=False
        )
    PhE=Column(
        Integer,
        nullable=False
        )
    