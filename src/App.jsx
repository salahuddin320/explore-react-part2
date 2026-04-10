import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Counter from './counter'
import Batsman from './batsman'
import User from './user'
import Friends from './friends'
import Posts from './posts'
import './App.css'

const fetchUser = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

const fetchPosts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

function App() {

  const postsPromise = fetchPosts();

  const fetchPromise = fetchFriends();

  return (
    <>
          <h1>Get started</h1>
          <Suspense fallback={<h4>Loading Posts....</h4>}>  
            <Posts postsPromise={postsPromise}></Posts>
          </Suspense>

          <Suspense fallback={<h1>Loading...</h1>}>
            <User fetchUser={fetchUser}></User>
          </Suspense>

          <Suspense fallback={<h3>Friends comming soon...</h3>}>
            <Friends fetchPromise={fetchPromise}></Friends>
          </Suspense>

          <Counter> </Counter>
          <Batsman></Batsman>
    </>
  )
}

export default App
