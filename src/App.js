import * as React from 'react';

import {
    Tour,
    TourProvider,
    ModalStep
} from 'react-ui-tour';

class App extends React.Component {
    state = {
        showed: [],
    };

    render() {
        return (
            <div>
                <TourProvider
                    predicate={id => {
                        console.log(`predicate - ${id}`);
                        if (id === 'id2') {
                            this.setState(({ showed }) => {
                                return {
                                    showed: [...showed, 'id2'],
                                }
                            });
                            return true;
                        }
                        if (id === 'id1' && this.state.showed.indexOf('id2') > -1) {
                            this.setState(({ showed }) => {
                                return {
                                    showed: [...showed, 'id1'],
                            }
                            });
                            return true;
                        }
                        return false;
                    }}
                    onTourShown={id => console.log(`shown tour ${id}`)}
                >
                    <div>
                        <Tour id="id1">
                            <ModalStep
                                header="Первый тур"
                                content="Первый шаг"
                            />
                            <ModalStep
                                header="Первый тур"
                                content="Второй шаг"
                            />
                        </Tour>

                        <Tour
                            id="id2"
                        >
                            <ModalStep
                                header="Второй тур"
                                content="Первый шаг"
                            />
                            <ModalStep
                                header="Второй тур"
                                content="Второй шаг"
                            />
                        </Tour>
                    </div>
                </TourProvider>
            </div>
        );
    }
}

export default App;
