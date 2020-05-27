import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: '',
            titles: '',
            email: this.props.email
        };
    }

    onTitlesChange = (event) => {
        this.setState({titles: event.target.value})
    }
    onImgUrlChange = (event) => {
        this.setState({imgUrl: event.target.value})
    }
    onSubmitForm = () => {
        fetch('https://sleepy-basin-78574.herokuapp.com/addbook', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                titles: this.state.titles,
                imgUrl: this.state.imgUrl,
                email: this.state.email
            })
        })
        .then(resp => resp.json())
        .then(user => {
            this.props.loadUser(user);
        })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">BOOK</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="imgurl">Image link</label>
                                <input onChange={this.onImgUrlChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="imgurl"  id="imgurl" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="titles">Titles</label>
                                <input onChange={this.onTitlesChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="titles"  id="titles" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={this.onSubmitForm} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('home')} className="f6 link dim black db pointer">Back</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Form;