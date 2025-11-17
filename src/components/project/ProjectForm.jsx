import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ProjectForm({handleSubmit, btnText, projectData}) {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {})

    useEffect(()=>{
        fetch('https://server-costs-flc3.onrender.com/categories',{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp)=> resp.json())
        .then((data)=> {
            setCategories(data)
        })
        .catch((err)=> console.log(err));

    },[])

    const submit = (e)=> {
        e.preventDefault();
        handleSubmit(project);
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
    }
    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
    }
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
               handleOnChange={handleChange} 
               type="text" text="Nome do Projeto" 
               name="name" 
               placeholder="Insira o nome do projeto"
               value={project.name ? project.name : ''}
            />
            <Input 
               handleOnChange={handleChange} 
               type="number" text="Orçamento do Projeto" 
               name="budget" 
               placeholder="Insira o orçamento total"
               value={project.budget ? project.budget : ''}
            />
            <Select 
               handleOnChange={handleCategory} 
               name="category_id" text="Selecione a categoria" 
               options={categories} 
               value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText}/>
            
        </form>
    )
}

ProjectForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    btnText: PropTypes.string.isRequired,
    projectData: PropTypes.object
};

export default ProjectForm;