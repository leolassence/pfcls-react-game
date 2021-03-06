import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';

import data from '../../app/data/cards';
import Card from '../../app/components/cards/Card';
import App from '../../app/components/App';

describe('<Card /> Component', () => {
  it('Should render', () => {
    const AppComponent = renderIntoDocument(<App />);

    const item = renderIntoDocument(
      <Card
        key={data[0]._id}
        data={data[0]}
        isRunning={true}
        timer={3}
        handler={AppComponent.handleSelectCard}
        col="col-xs-6"
      />
    );

    expect(item).toExist();
  });
});
