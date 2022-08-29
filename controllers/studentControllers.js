import Crud from "../models/Crud.js";

class Student {
    static getAllDoc = async (req, res) => {
        if (req.query._limit) {
            const result = await Crud.find({}, null, { limit: req.query._limit })
            console.log(result);
            res.json(result)
        }
        else {
            const result = await Crud.find();
            res.json(result);
        }
    }

    static createDoc = async (req, res) => {
        try {
            const { title, desc } = req.body;
            const result = new Crud(req.body);
            const data = await result.save();
            res.send(data);
        } catch (error) {
            res.send({
                "err": error
            })
        }
    }

    static getSingleDoc = async (req, res) => {
        try {
            const id = req.params.id;
            const result = await Crud.findById(id);
            res.send(result);
        } catch (error) {
            res.send({
                "error": "notes not found"
            });
        }
    }

    static updateDoc = async (req, res) => {
        try {
            const { title, data } = req.body;
            const result = await Crud.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" });
            res.json(result);
        } catch (error) {
            res.json({
                "error": `${error}`
            });
        }
    }

    static deleteDoc = async (req, res) => {
        try {
            const result = await Crud.findByIdAndDelete(req.params.id);
            res.send(result);
        } catch (error) {
            res.send({
                "error": `Something went wrong. Maybe id is not valid.`
            });
        }
    }
}

export default Student;