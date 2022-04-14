import React from 'react'

const isIncome = Math.round(Math.random());

const infoCard = () => {
  return (
    <div style={{textAlign: 'center', padding:'0 10%'}}>
        Try saying : <br />
         Add {isIncome ? 'Income ' : 'Expense '}
          of {isIncome ? 'Hundred Thousand rupees ' : 'Fifty Thousand rupees '} 
          in category {isIncome ? 'Buisness ' : 'House '}
          this {isIncome ? 'Monday ' : 'Tuesday '}
    </div>
  )
}

export default infoCard