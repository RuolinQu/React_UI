import React, { useState, useEffect } from 'react';
import axios from 'axios'


const App: React.FC = () => {
  const [title, setTitle] = useState('')
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(resp => {
        console.log(resp)
        setTitle(resp.data.title)

      })
  })
  return (
    <div>
      <header className="App=header">
        <h1>{title}</h1>
      </header>
    </div>
  )
}


export default App;




























// import React from 'react';
// import Button, { ButtonType, ButtonSize } from "./components/Button/button"
// import Menu from './components/Menu/menu'
// import MenuItem from './components/Menu/menuItem'
// import SubMenu from './components/Menu/subMenu'
// import Icon from './components/Icon/icon'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// library.add(fas)



// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Icon icon='arrow-down' theme="danger" size='10x' />
//         <Menu defaultIndex={'0'} defaultOpenSubMenus={['2']}>
//           <MenuItem >
//             cool link
//           </MenuItem >
//           <MenuItem disabled>
//             cool link 1
//           </MenuItem>
//           <SubMenu title="dropdown">
//             <MenuItem>
//               drop1
//             </MenuItem>
//             <MenuItem>
//               drop2
//             </MenuItem>
//           </SubMenu>

//           <MenuItem >
//             cool link 2
//           </MenuItem>

//         </Menu>


//         {/* <Button className="111">Hello</Button>
//         <Button btnType={ButtonType.Default} size={ButtonSize.Large}>Hello</Button>
//         <Button btnType={ButtonType.Primary} disabled={true}>Disabled</Button>
//         <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
//         <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
//         <Button btnType={ButtonType.Link} href='http://www.google.com' target="_blank">google</Button>
//         <Button btnType={ButtonType.Link} disabled={true} href='http://www.google.com'>google</Button>
//  */}


//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div >
//   );
// }

// export default App;
