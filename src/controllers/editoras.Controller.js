import editoras from "../models/Editora.js";

class EditoraController{

    static async listarEditoras(req, res){
        const result = await editoras.find();
        res.status(200).json(result)    
    }
    static buscaEditora = (req,res) => {
        editoras.findById(req.params.id,(err,editoras)=>{
            if(!err)
                res.status(200).json(editoras)
            else 
                res.status(400).send({message:`${err.message} - ID de Editora não encontrado`})    
        })
                
   }     

    static async registraEditoras(req,res){
        const Editora = await editoras.create(req.body);
        res.status(201).json(Editora);
    }

     static  atualizarEditora =(req, res) =>{ 
         editoras.findByIdAndUpdate(req.params.id,{$set: req.body},(err)=>{
            if(!err){
                res.status(200).send({message:"Editora atualizado com sucesso"})
            }else{
                res.status(500).send({message: err.message})
            }
         })

    }
    static excluirEditora = (req, res) => {
        editoras.findByIdAndDelete(req.params.id,(err)=>{
            if(!err){
                res.status(200).send({message:"Editora excluido com sucesso"})
            }else{
                res.status(500).send({message:err.message})
            }
        })
    }
   

}

export default EditoraController