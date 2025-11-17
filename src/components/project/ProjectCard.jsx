import styles from "./ProjectCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectCard({id, name, budget, category, handleRemove}){
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);

    }


    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span>  R${budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.project_card_actions}>   
                <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}
ProjectCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    handleRemove: PropTypes.func.isRequired,
};

export default ProjectCard;