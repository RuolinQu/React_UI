import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './input'
const ControlledInput = () => {
    const [value, setValue] = useState()
    return <Input value={value} defaultValue={value} onChange={(e) => { setValue(e.target.value) }} />
}
const defaultInput = () => (
    <>
        <Input
            style={{ width: '300px' }}
            placeholder="placeholder"
            onChange={action('changed')}
        />
        <ControlledInput />
    </>
)
const disabledInput = () => (
    <Input
        style={{ width: '300px' }}
        placeholder="disabled input"
        disabled
    />
)

const iconInput = () => (
    <Input
        style={{ width: '300px' }}
        placeholder="input with icon"
        icon="search"
    />
)

const sizeInput = () => (
    <>
        <Input
            style={{ width: '300px' }}
            defaultValue="large size"
            size="lg"
        />
        <Input
            style={{ width: '300px' }}
            placeholder="small size"
            size="sm"
        />
    </>
)

const pandInput = () => (
    <>
        <Input
            style={{ width: '300px' }}
            defaultValue="prepend text"
            prepend="https://"
        />
        <Input
            style={{ width: '300px' }}
            defaultValue="google"
            append=".com"
        />

    </>
)


storiesOf('Input component', module)
    .add('Input', defaultInput)
    .add('disabled Input', disabledInput)
    .add('Icon Input', iconInput)
    .add('Input in sizes', sizeInput)
    .add('Input with prepend and apppend', pandInput)

