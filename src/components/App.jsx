import React from 'react'
import Header from './Header'
import Card from './Card'
import jobData from '../data'

const App = () => {
    return (
        <div>
            <Header />
            <main>

                {jobData.map((data) => {
                    return <Card
                        key = {data.id}
                        image = {data.logo}
                        companyName={data.company}
                        position={data.position}
                        contract={data.contract}
                        location={data.location}
                        timeOfPost={data.postedAt}
                        languages={data.languages}
                        tools = {data.tools}
                        new = {data.new}
                        featured = {data.featured}
                        role = {data.role}
                        level = {data.level}
                    />
                })}
            </main>
        </div>
    )
}



export default App