import React from 'react'

const Card = (props) => {
    let index = 0;
    let shouldDisplay;
    const updateFilterBox = props.addFilter;

    const unfilter = (event) => {
        let dontHideBox = false;
        const clickedFilter = event.target.parentElement.outerText;
        const clickedFilterClass = event.target.parentElement.className;

        let filterName = event.target.parentElement.outerText
        let filterLlist = document.querySelectorAll('.filter-box ul li')

        filterLlist.forEach((filter) => {
            if (filter.textContent === filterName) {
                filter.classList.add('hide');
            }

            if (filter.className.split(' ').length === 1){
                dontHideBox = true;
            }
        })

        let cards = document.querySelectorAll('.card');
        let jobRequirements = document.querySelectorAll('.card ul.requirements');

        cards.forEach((card, index) => {
            let filterCriteriaStringList = [];
            let filterCriteriaNodeList = jobRequirements[index].querySelectorAll(`.${clickedFilterClass}`);

            filterCriteriaNodeList.forEach((lItem) => {
                filterCriteriaStringList.push(lItem.innerHTML)
            })

            if (filterCriteriaStringList.includes(clickedFilter)) {
                card.classList.remove('hide');
            }
        });

        if (!dontHideBox) {
            const filterBox = document.getElementById('filterBox');
            filterBox.classList.remove('filter-box--show');
        }
    }

    const filter = (event) => {
        const filterBox = document.getElementById('filterBox');
        filterBox.classList.add('filter-box--show');

        const clickedFilter = event.target.outerText;
        const clickedFilterClass = event.target.className;

        updateFilterBox((prevValue) => {
            return ([...prevValue,
            <li className={clickedFilterClass}>
                {clickedFilter}


                    <img onClick={unfilter} role='button' className='filter-box__icon-remove' src='/images/icon-remove.svg' />

            </li>
            ])
        })

        let cards = document.querySelectorAll('.card');
        let jobRequirements = document.querySelectorAll('.card ul.requirements');

        cards.forEach((card, index) => {
            let filterCriteriaStringList = [];
            let filterCriteriaNodeList = jobRequirements[index].querySelectorAll(`.${clickedFilterClass}`);

            filterCriteriaNodeList.forEach((lItem) => {
                filterCriteriaStringList.push(lItem.innerHTML)
            })

            if (filterCriteriaStringList.includes(clickedFilter)) {
                card.classList.add('hide')
            }

        });

    }

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
        <div className={`card ${shouldDisplay}`} >
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
                    <li role={'button'} className='role' onClick={filter}>{props.role}</li>
                    <li role={'button'} className='level' onClick={filter}>{props.level}</li>

                    {requiredLanguages.map((language) => {
                        return <li role={'button'} key={index++} onClick={filter} className='language'>{language}</li>
                    })}

                    {
                        jobTools.map((tool) => {
                            return <li role={'button'} onClick={filter} key={index++} className='tool'>{tool}</li>
                        })
                    }
                </ul>
            </section>
        </div>
    )
}

export default Card