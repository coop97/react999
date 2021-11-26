import React from 'react';
// import axios from 'axios';
import Loading from '../layouts/Loading';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import WrapTitle from '../layouts/WrapTitle';
import ContInfo from '../layouts/ContInfo';
import ReferInfo from '../info/ReferInfo';
import CssReferInfo from '../info/CssReferInfo';
import JsReferInfo from '../info/JSReferInfo';
import * as HtmlJson from '../../assets/json/refer.json';
import * as CssJson from '../../assets/json/cssRefer.json';
import * as JsJson from '../../assets/json/JSrefer.json';

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
        cssRefers: [],
        jsRefers: [],
        activeTab: 0,
    }
    clickHandler = (id) => {
        this.setState({activeTab : id})
    }
    
    getRefer = async () => {
        // this.setState({refers: JsonData.default.data.htmlRefer, isLoading: false});
        const {
            default: {
                data: {htmlRefer},
            },
        } = HtmlJson;
        this.setState({refers: htmlRefer, isLoading: false})
        const {
            default: {
                data:{cssRefer},
            },
        } = CssJson;
        this.setState({cssRefers: cssRefer, isLoading: false})
        const {
            default: {
                data:{jsRefer},
            },
        } = JsJson;
        this.setState({jsRefers: jsRefer, isLoading: false})
    }
    componentDidMount(){
        setTimeout(() => {
            this.getRefer();
        }, 2000)
    }
    render(){
        const {isLoading, refers, cssRefers, jsRefers} = this.state;
        const tabObj = {
            0: refers.map((refer) => (
                <ReferInfo
                    key={refer.id}
                    link={refer.link}
                    id={refer.id}
                    title={refer.title}
                    desc1={refer.desc1}
                    desc2={refer.desc2}
                    element={refer.element}
                    tag={refer.tag}
                    use={refer.use}
                    version={refer.version}
                    view={refer.view}
                    definition={refer.definition}
                />
            )),
            1: cssRefers.map((cssRefer) => (
                <CssReferInfo
                    key={cssRefer.id}
                    link={cssRefer.link}
                    id={cssRefer.id}
                    title={cssRefer.title}
                    desc1={cssRefer.desc1}
                    desc2={cssRefer.desc2}
                    element={cssRefer.element}
                    tag={cssRefer.tag}
                    use={cssRefer.use}
                    version={cssRefer.version}
                    view={cssRefer.view}
                    definition={cssRefer.definition}
                />
            )),
            2: jsRefers.map((jsRefer) => (
                <JsReferInfo
                    key={jsRefer.id}
                    link={jsRefer.link}
                    id={jsRefer.id}
                    title={jsRefer.title}
                    desc1={jsRefer.desc1}
                    desc2={jsRefer.desc2}
                    syntax={jsRefer.syntax}
                    definition={jsRefer.definition}    
                />
            ))
        }
        console.log(this.state.activeTab);
        return (
            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        <Header />
                        <Contents>
                            <section id="referCont">
                                <div className="container">
                                <WrapTitle text={['Reference', 'book']} />
                                    <div className="refer__cont">
                                        <div className="table">
                                            <ul className="tabs">
                                                <li onClick={() => this.clickHandler(0)}><h3 className='tabBtn'>HTML</h3></li>
                                                <li onClick={() => this.clickHandler(1)}><h3 className='tabBtn'>CSS</h3></li>
                                                <li onClick={() => this.clickHandler(2)}><h3 className='tabBtn'>JAVASCRIP</h3></li>
                                            </ul>
                                            <ul>
                                                {tabObj[this.state.activeTab]}
                                            </ul>
                                        </div>
                                    </div>
                                 </div>
                            </section>
                            <ContInfo />
                        </Contents>
                        <Footer />
                    </div>
                )}
            </div>
        )
    }
}
export default Reference;