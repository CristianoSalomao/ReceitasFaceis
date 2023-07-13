import './AddReceita.css'
import { BiPlus, BiTrash } from 'react-icons/bi';
import { useState, useRef } from 'react';
import { SHA256 } from 'crypto-js';

export default function AddReceita(){

    const [ingredientes, setIngredientes] = useState([])

    const nomeRef = useRef()
    const imagemRef = useRef()
    const descriptionRef = useRef()
    const preparoRef = useRef()
    const infoRef = useRef()

    function addIngredientes(e){
        const ingrediente = e.target.ingredientes.value
        if(ingrediente){
            setIngredientes((i) => [...i, ingrediente])
        }
        e.target.value = ''
    }

    function removeIngrediente(id){
        setIngredientes(ingredientes.filter((i, index) => {
            if(index != id){
                return i
            }
        }))
    }

    async function adicionarReceita(){
        const minhasReceitas = localStorage.getItem('receitas') ? JSON.parse(localStorage.getItem('receitas')) : []

        const newRec = {
            "id": SHA256(imagemRef.current.value).toString(),
            "nome": nomeRef.current.value,
            "image": imagemRef.current.value,
            "description": descriptionRef.current.value,
            "secao": [
              {
                "nome": "Ingredientes",
                "conteudo": ingredientes
              },
              {
                "nome": " Modo de Preparo",
                "conteudo": preparoRef.current.value
              },
              {
                "nome": " Outras informações",
                "conteudo": infoRef.current.value
              }
            ]
          }

        minhasReceitas.push(newRec)

        localStorage.setItem("receitas", JSON.stringify(minhasReceitas))
        
    }

    return (
        <div id='AddRec'>
          <div className='AddRec-Container'>
            <input type="text" placeholder='Nome da receita'  ref={nomeRef} required/>
            <input type="url" placeholder='Link da imagem' ref={imagemRef} required/>
            <input type="text" placeholder='Descrição' ref={descriptionRef} required/>
            <form onSubmit={(e) => {e.preventDefault(), addIngredientes(e)}}>
                <div className='ingredientes'>
                    {ingredientes.map((text, index) => {
                        return (
                            <span className='ingrediente' key={index}>
                                <h1>{text}</h1>
                                <BiTrash size={15} onClick={() => removeIngrediente(index)}/>
                            </span>
                        )
                    })}
                </div>
                <input id='ingredientes' type="text" placeholder='Ingredientes' autoComplete='off' />
                <button><BiPlus/></button>
            </form>
            <textarea placeholder='Modo de preparo' ref={preparoRef}></textarea>
            <textarea placeholder='Mais informações' ref={infoRef}></textarea>
            <div className="Btn-AddRec"onClick={() => adicionarReceita()}>
              <button type="submit">
                <h1>Adicionar Receita</h1>
              </button>
            </div>
          </div>
        </div>
      );
}