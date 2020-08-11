import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
    .add('welcome', () => {
        return (
            <>
                <h1>Welcome to Bomber UI</h1>
                <p>Bomber is UI framework contains a set of components for building rich, interactive user interfaces</p>
                <img src="https://github.com/RuolinQu/favicon/blob/master/joker.png?raw=true"></img>
                <h3>Try install</h3>
                <code>
                    npm install bonusbomber --save
                </code>
            </>
        )
    }, { info: { disable: true } })