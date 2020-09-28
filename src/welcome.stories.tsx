import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
    .add('welcome', () => {
        return (
            <>
                <h1>Welcome to Bomber UI</h1>
                <p>Bomber is UI framework contains a set of components for building rich, interactive user interfaces</p>
                <p>Click on the components in the bar for more details</p>

                <img src="https://github.com/RuolinQu/favicon/blob/master/joker.png?raw=true"></img>
                <h3>Try install</h3>
                <code>
                    npm install bonusbomber --save
                </code>
                <br />
                <br />
                <p>Visit https://github.com/RuolinQu for more information</p>
            </>
        )
    }, { info: { disable: true } })