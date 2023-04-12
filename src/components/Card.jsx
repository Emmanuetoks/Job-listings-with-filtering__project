import React from 'react'

const Card = (props) => {
    let requiredLanguages = props.languages;
    let jobTools = props.tools

    const checkIfNew = () => {
        if (props.new) {
            return <p className='new'> new!</p>
            
        }
    }

    const checkIfFeatured = () => {
        if (props.featured) {
            return <p className='featured'>featured</p>
        }
    }

    return (
        <div className= 'card' >
            <section className='left-section'>
                <img src={props.image} />
                <div className='left-section-main'>
                    <div className='top'>
                        <p className='company-name'>
                            {props.companyName}
                        </p>

                        {checkIfNew()}
                        {checkIfFeatured()}
                    </div>
                    <h5 className='position'>{props.position}</h5>
                    <div className='job-details-bottom'>
                        <p>{props.timeOfPost}</p>
                        <hr />
                        <p>{props.contract}</p>
                        <hr />
                        <p>{props.location}</p>
                    </div>
                </div>
            </section>

            <section className='right-section'>
                <ul className='requirements'>
                    <li>{props.role}</li>
                    <li>{props.level}</li>

                    {requiredLanguages.map((language) => {
                        return <li className=' language'>{language}</li>
                    })}

                    {
                        jobTools.map((tool) => {
                            return <li className='tool'>{tool}</li>
                        })
                    }
                </ul>
            </section>
        </div>
    )
}

export default Card