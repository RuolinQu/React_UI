import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './button'
import ButtonProps from './button'

// const { withPropsTable } = require('storybook-addon-react-docgen');


// export default {
//     title: 'Component',
//     decorators: [withInfo],
// };

// export const defaultView = () => <Button />;
// defaultView.story = {
//     parameters: {
//         info: {
//             text: `
//         description or documentation about my component, supports markdown

//         ~~~js
//         <Button>Click Here</Button>
//         ~~~
//       `,
//         },
//     },
// };


const defaultButton = () => (
    <Button onClick={action('clicked')}>default button</Button>
)


const buttonWithSize = () => (
    <>
        <Button size="lg">Large button</Button>
        <Button size="sm">Small button</Button>
    </>
)

const buttonWithType = () => (
    <>
        <Button btnType="primary">Primary Button</Button>
        <Button btnType="danger">Danger Button</Button>
        <Button btnType="link" href="http://google.com">Link button</Button>
    </>

)

storiesOf('Button Component', module)
    .add('default Button', defaultButton)
    .add('different sizes', buttonWithSize)
    .add('different types', buttonWithType)