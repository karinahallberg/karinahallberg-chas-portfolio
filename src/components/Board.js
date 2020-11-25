import React from 'react'
import Navbar from '../components/Navbar'
import ArticleContextProvider from '../contexts/ArticleContext'
import ArticleList from '../components/ArticleList'
import NewArticleForm from '../components/NewArticleForm'
import ErrorBoundary from '../ErrorBoundary'

function Board() {
  return (
    <div className='App'>
      <ArticleContextProvider>
        <ErrorBoundary>
          <Navbar />
          <ArticleList />
          <NewArticleForm />
        </ErrorBoundary>
      </ArticleContextProvider>
    </div>
  )
}

export default Board
