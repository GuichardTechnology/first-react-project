
import { ProductCard } from "./ProductCard";
import { produts } from "../../data/product";
import styles from"./style.module.css";
export const ProductsSection = () => {
    
    return (

        <div className="container">

            <section className={styles.productSection}>
                <h2 className="title2">Nice Dress</h2>
                <ul className={styles.productList}>
                    {
                    
                     produts.map((product) =>{
                        const {id,  img, name, price } = product 

                        return(
                            <li key={id}><ProductCard title={name} image={img} price={price}/></li>
                        )
                     })
                      
                    }
                </ul>
            </section>
        </div>

    )
}