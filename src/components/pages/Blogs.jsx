import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { usePDF } from 'react-to-pdf';
const Blogs = () => {
  const { toPDF, targetRef } = usePDF({filename: 'blog.pdf'});
  return (
    <>
    <Navbar></Navbar>
    <header>  <button onClick={()=>toPDF()} className='btn my-5'>Download pdf</button> </header>
    <div  ref={targetRef} className='p-5'>
      <article className='mb-10'>
      <h1 className='text-3xl'>custom hook</h1>
      <p>Custom Hooks are a mechanism to reuse stateful logic in different components.</p>
      <h3 className='text-2xl'>Purpose of creating custom hook</h3>
      <p>There are several built-in hooks which are useState(), useContext(), useEffect() and so on. Each hook is used to do a specific task. We can not complete all of our task using only these built-in hooks. An application has different use cases where built-in hooks can not meet the requirements and we need to create custom hook. Custom hook is basically used to share same stateful logic with different components. Thus, we can be free from code duplication problem.</p>
      </article>

      <article className='mb-10'>
        <h1 className='text-3xl'>Node js vs express js</h1>
        <h5 className='text-xl font-bold'>Node js: </h5>
        <p className='mb-3'>Node js is a JavaScript run time environment. It is written in c++. It is built on google v8 engine. With the help of node js, we can run our JavaScript code in our local machine or web server. It helps us build web application. It follows the even-driven process and I/O. But we need to write much code to build application while using nodejs. It has less features. There is no routing facility in nodejs. Controllers are not provided. Middleware is not available. It needs much coding time</p>
        <h5 className='text-xl font-bold'>Express js:</h5>
        <p>Express js is a web framework. It has extra facility than nodejs. Express js has routing facility, middleware and so on. It is built on nodejs. Express js is written in JavaScript. Controllers are provided. Middlewares are available. It needs less coding time</p>
      </article>

      <article>
        <h1 className="text-3xl font-medium">How to validate props of component using propTypes</h1>
        <p>Props of components should be validated for ensuring code readability. I also helps to avoid unwanted errors. prop-types is a small library. It's usage is very simple. First of all, it should be installed. Then import PropTypes. PropTypes should be as an object and props should be assigned to it.</p>
      </article>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Blogs