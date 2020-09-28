import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../Button/button'
import Transition from './transition'
import BPP from './bpp'
import CPP from './cpp'
import DPP from './dpp'
import { useState } from '@storybook/addons'






const transtitonDisplay1 = () => (

    <>
        <BPP></BPP>
    </>
)

const transtitonDisplay2 = () => (

    <>
        <CPP></CPP>
    </>
)

const transtitonDisplay3 = () => (

    <>
        <DPP></DPP>
    </>
)

storiesOf('Transition Component', module)
    .add('Transition zoom left', transtitonDisplay1)
    .add('Transition zoom right', transtitonDisplay2)
    .add('Transition zoom with button', transtitonDisplay3)
