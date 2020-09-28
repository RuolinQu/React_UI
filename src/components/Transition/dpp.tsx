import Button from '../Button/button'
import Transition from './transition'
import React, { FC, useState, createContext, CSSProperties } from 'react'
const DPP: React.FC = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            < Button size="lg" onClick={() => { setShow(!show) }}> Toogle</Button >
            <Transition
                in={show}
                timeout={300}
                animation="zoom-in-right"
            >
                <div>
                    <p>
                        This is for transition animation display.
                </p>
                    <p>
                        This is for transition animation display.
        </p>
                    <p>
                        This is for transition animation display.
        </p>
                    <p>
                        This is for transition animation display.
        </p>
                </div>
            </Transition>
            <Transition
                in={show}
                timeout={300}
                animation="zoom-in-right"

            >
                <Button btnType="primary" size="lg">A Large Test Button</Button>


            </Transition>
        </>
    )
}


export default DPP