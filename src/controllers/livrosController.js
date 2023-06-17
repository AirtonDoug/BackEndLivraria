import livros from "../models/Livro.js";

class LivroController{

    static listarLivros = (req, res)=>{
        livros.find()
            .populate('autor','nome')
            .populate('editora','nome')
            .exec((err,livros)=>{
            res.status(200).json(livros);
        })
    
    }
    static buscaLivro = (req,res) => {
      const id = req.params.id;

          livros.findById(id)
          .populate('autor')
          .populate('editora')
          
          .exec((err,livros)=>{
        if(err){
            response.status(400).send({message:`${err.message} -  Id do livro não encontrado`});
        }else{
            res.status(200).send(livros);
        }
      })
                
        
   } 
   static buscaLivroPorEditora = (req,res)=>{

        const editora = req.query.editora;

        livros.find({})
        .populate('editora')
        .exec((err,livros)=>{
            if(!err){
                const livrosFiltrados = livros.filter(livro => livro.editora.nome === editora )
                res.status(200).send(livrosFiltrados);
        
            }else{
                res.status(400).send({message: `${err.message} - livro não encontrado`})
            }
        })

          
          


   }    

    static async registraLivros(req,res){
        const livro = await livros.create(req.body);
        res.status(201).json(livro);
    }

     static  atualizarLivro =(req, res) =>{ 
         livros.findByIdAndUpdate(req.params.id,{$set: req.body},(err)=>{
            if(!err){
                res.status(200).send({message:"livro atualizado com sucesso"})
            }else{
                res.status(500).send({message: err.message})
            }
         })

    }
    static excluirLivro = (req, res) => {
        livros.findByIdAndDelete(req.params.id,(err)=>{
            if(!err){
                res.status(200).send({message:"livro excluido com sucesso"})
            }else{
                res.status(500).send({message:err.message})
            }
        })
    }
   

}

export default LivroController