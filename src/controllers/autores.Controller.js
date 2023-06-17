import autores from "../models/Autor.js";

class AutorController{

    static async listarAutores(req, res){
        const result = await autores.find();
        res.status(200).json(result)    
    }
    static buscaAutor = (req,res) => {
        autores.findById(req.params.id,(err,autores)=>{
            if(!err)
                res.status(200).json(autores)
            else 
                res.status(400).send({message:`${err.message} - ID de autor não encontrado`})    
        })
                
   }     

    static async registraAutores(req,res){
        const autor = await autores.create(req.body);
        res.status(201).json(autor);
    }

     static  atualizarAutor =(req, res) =>{ 
         autores.findByIdAndUpdate(req.params.id,{$set: req.body},(err)=>{
            if(!err){
                res.status(200).send({message:"Autor atualizado com sucesso"})
            }else{
                res.status(500).send({message: err.message})
            }
         })

    }
    static excluirAutor = (req, res) => {
        autores.findByIdAndDelete(req.params.id,(err)=>{
            if(!err){
                res.status(200).send({message:"Autor excluido com sucesso"})
            }else{
                res.status(500).send({message:err.message})
            }
        })
    }
   

}

export default AutorController