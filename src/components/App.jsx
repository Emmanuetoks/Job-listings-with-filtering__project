import React from 'react'
import Header from './Header'
import Card from './Card'
import data from '../data/data.json'

const App = () => {
    const [filterData, addFilter] = React.useState([]);
    const refresh = ()=>{
        let cards = document.querySelectorAll('.card');
        document.getElementById('filterBox').classList.remove('filter-box--show');
        addFilter([])
        cards.forEach((card)=>{
            card.classList.remove('hide');
        })
    }

    return (
        <div>
            <Header />
            <main>
                <div id='filterBox' className='filter-box'>
                    <ul>
                        {filterData}
                    </ul>
                    <a className='clear-button' onClick={refresh} role={'button'}>
                        clear
                    </a>
                </div>

                {data.map((data) => {
                    return <Card
                        key={data.id}
                        image={data.logo}
                        companyName={data.company}
                        position={data.position}
                        contract={data.contract}
                        location={data.location}
                        timeOfPost={data.postedAt}
                        languages={data.languages}
                        tools={data.tools}
                        new={data.new}
                        featured={data.featured}
                        role={data.role}
                        level={data.level}
                        addFilter={addFilter}
                        filterData={filterData}
                    />
                })}
            </main>
        </div>
    )
}

export default App