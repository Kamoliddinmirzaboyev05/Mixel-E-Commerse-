import React from 'react'
import "./Comparison.css"
import ProductCard from '../../components/productCard/ProductCard'
import ProductPanel from '../../components/productPanel/ProductPanel'
import ProductBox from '../../components/productBox/ProductBox'

function Comparison() {
    return (
        <>
            <div className="comparison">
                <div className="container">
                    <div className="basicTitle">

                        <div className='basicTitleLeft'>
                            <div>
                                <p>
                                    Главная
                                </p>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Сравнить
                                </p>
                            </div>
                        </div>


                    </div>
                    <h3>
                        Сравнение товаров
                    </h3>
                    <div className="comparisonCards">
                        <div className="productsBlock">
                            <ProductBox />
                            <ProductBox />
                            <ProductBox />
                           

                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comparison