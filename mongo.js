db.students.find({ age: 22, marks: 90 })
db.students.find({ marks: { $gt: 80 }, age: { $lte: 18 } })
db.students.find({ grade: "A+" })

