import { Student } from "../models/studentsModel.js";

export const getStudents = (req, res) => {
res.status(201).status({message: "it works"})
//Student.findAll()
//  .then((students) => {
//   res.status(200).send(students)
//  })
};

export const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  Student.findByPk(id)
  .then((student) => {
    res.status(200).send(student || `Student with id: ${id} not found!`)
  })
};

export const addStudent = (req, res) => {
  Student.create({name: req.body.name, email: req.body.email})
  .then(() => {
    res.status(201).send({message: "Created"})
  })
};

export const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  Student.destroy({where: {id: id}})
  .then(() => {
    res.status(204).send("Deleted")
  })
};
