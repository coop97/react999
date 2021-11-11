import axios from 'axios';
import React from 'react';
import Contents from '../layouts/Contents';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Loading from '../layouts/Loading';
import WrapTitle from '../layouts/WrapTitle';
import ContInfo from '../layouts/ContInfo';
import ReferInfo from '../info/ReferInfo';
// import Header from '../layouts/Header';
// import Footer from '../layouts/Footer';
// import Contents from '../layouts/Contents';

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: []
    }

    getRefer = async () => {
        const {
            data: {
                data: { htmlRefer }
            }
        } = await axios.get("https://coop97.github.io/react999/src/assets/json/refer.json");
        this.setState({ htmlRefer, isLoading: false})

        console.log(htmlRefer)
        // console.log(refers)
    }

    componentDidMount(){
        setTimeout(() => {
            this.getRefer();
        }, 2000);
    }

    render(){
        const {isLoading, htmlRefer} = this.state;

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
                                            <h3>HTML</h3>
                                            <ul>
                                                {htmlRefer.map((refers) => (
                                                    <ReferInfo
                                                        key={refers.id}
                                                        link={refers.link}
                                                        id={refers.id}
                                                        title={refers.title}
                                                        desc1={refers.desc1}
                                                        desc2={refers.desc2}
                                                        definition={refers.definition}
                                                        element={refers.element}
                                                        tag={refers.tag}
                                                        version={refers.version}
                                                        view={refers.view}
                                                        use={refers.use}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Contents>
                        <ContInfo />
                        <Footer />
                    </div>
                )}
            </div>
        )
    }
}
export default Reference;





// function Reference(){
//     return (
//         <div>
//             <Header />
//             <Contents>
//                 <section id="referCont">
//                     <div class="container">
//                         <div class="wrap__title">
//                             <h2><strong>REFERENCE</strong><em>BOOK</em></h2>
//                         </div>
//                         <div class="refer__cont">
//                             <div class="table">
//                                 <h3>HTML</h3>
//                                 <ul>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">1</span>
//                                             <span className="attr">&lt;a&gt;</span>
//                                             <span className="desc">&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">2</span>
//                                             <span className="attr">&lt;abbr&gt;</span>
//                                             <span className="desc">&lt;abbr&gt; 태그는 다른 페이지 이동을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">3</span>
//                                             <span className="attr">&lt;acronym&gt;</span>
//                                             <span className="desc">&lt;acronym&gt; 태그는 다른 페이지 이동을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">4</span>
//                                             <span className="attr">&lt;address&gt;</span>
//                                             <span className="desc">&lt;address&gt; 태그는 다른 페이지 이동을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">5</span>
//                                             <span className="attr">&lt;applet&gt;</span>
//                                             <span className="desc">&lt;applet&gt; 태그는 다른 페이지 이동을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">6</span>
//                                             <span className="attr">&lt;area&gt;</span>
//                                             <span className="desc">&lt;area&gt; 태그는 이미지 맵의 영역을 정의합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">7</span>
//                                             <span className="attr">&lt;article&gt;</span>
//                                             <span className="desc">&lt;article&gt; 태그는 사이트의 독립적인 컨텐츠 섹션을 설정합니다. </span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">8</span>
//                                             <span className="attr">&lt;aside&gt;</span>
//                                             <span className="desc">&lt;aside&gt; 태그는 주요 콘텐츠의 보조적 컨텐츠 섹션을 설정합니다</span>
//                                             <span className="Inline">block Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">9</span>
//                                             <span className="attr">&lt;audio&gt;</span>
//                                             <span className="desc">&lt;audio&gt; 태그는 오디오 파일을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">10</span>
//                                             <span className="attr">&lt;b&gt;</span>
//                                             <span className="desc">&lt;b&gt; 태그는 다른 텍스트와 구별 할 때 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">11</span>
//                                             <span className="attr">&lt;base&gt;</span>
//                                             <span className="desc">&lt;base&gt; 태그는 모든 문서의 기본이 되는 URL을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">12</span>
//                                             <span className="attr">&lt;basefont&gt;</span>
//                                             <span className="desc">&lt;basefont&gt; 태그는 문서의 기본 폰트, 사이즈, 종류를 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">13</span>
//                                             <span className="attr">&lt;a&gt;</span>
//                                             <span className="desc">&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">14</span>
//                                             <span className="attr">&lt;bdi&gt;</span>
//                                             <span className="desc">&lt;bdi&gt; 태그는 태그는 텍스트의 출력 방향 영역을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">15</span>
//                                             <span className="attr">&lt;bdo&gt;</span>
//                                             <span className="desc">&lt;bdo&gt; 태그는 텍스트의 방향을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">16</span>
//                                             <span className="attr">&lt;big&gt;</span>
//                                             <span className="desc">&lt;big&gt; 태그는 텍스트의 크기를 크게 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">17</span>
//                                             <span className="attr">&lt;blockquote&gt;</span>
//                                             <span className="desc">&lt;blockquote&gt; 태그는 긴 문장의 인용문을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">18</span>
//                                             <span className="attr">&lt;blink&gt;</span>
//                                             <span className="desc">&lt;blink&gt; 태그는 다른 페이지 이동을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">19</span>
//                                             <span className="attr">&lt;body&gt;</span>
//                                             <span className="desc">&lt;body&gt; 태그는 문서의 타이틀, 스크립트, 스타일, 메타 정보 등을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </Contents>
//             <Footer />
//         </div>
//     )
// }

// export default Reference;