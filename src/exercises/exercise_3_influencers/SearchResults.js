import React from 'react';

let SearchResults = ({ data }) => {
  return (
    <ul className='search-results'>
      {data.map((influencer, index) => {
        return (
          <li>
            <dl key={index}>
              <div className='member-field'>
                <dt>Member</dt>
                <dd>{influencer.member}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{influencer.influencerType}</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>{influencer.indicationCategory}</dd>
              </div>
              <div>
                <dt>Affiliation</dt>
                <dd>{influencer.affiliation}</dd>
              </div>
              <div>
                <dt>Title</dt>
                <dd>{influencer.affiliationPosition}</dd>
              </div>
              <div>
                <dt>State</dt>
                <dd>{influencer.primaryState}</dd>
              </div>
              <div>
                <dt>Priority</dt>
                <dd>{influencer.priority}</dd>
              </div>
            </dl>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
