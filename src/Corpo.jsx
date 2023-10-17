import React from "react";
import "./CorpoStyle.css"
import Banner from "./assets/illustration.png"
import Play from "./assets/play.png"

const Corpo = () => {
    return (
        <>
            <main>
                <section>
                    <div className="box">
                        <h3>HAYAO MIYAZAKI</h3>
                        <h1>A VIAGEM DE CHIHIRO</h1>
                        <p className="p1">Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
                        <div className="div-buttons">
                            <button><p><img width="15px" src={Play}/>ASSISTIR AGORA</p></button>
                            <button><p>ASSISTA O TRAILER</p></button>
                        </div>
                    </div>
                    <figure>
                        <img className="banner" src={Banner} alt="" />
                    </figure>
                </section>
            </main>
        </>
    )
}

export default Corpo