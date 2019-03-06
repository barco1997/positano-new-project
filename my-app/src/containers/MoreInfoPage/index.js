/**
 *
 * CreateEyelandPage
 *
 */

import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import axios from 'axios';
//  import SendButton from 'components/SendButton';
//  import EyelandTagBlock from 'components/EyelandTagBlock';
//  import SocialTagBlock from 'components/SocialTagBlock';
//  import TagInputField from 'components/TagInputField';
//  import AttachIconButton from 'components/AttachIconButton';
//  import SocialInput from 'components/SocialInput';
//  import PlaceMap from 'containers/PlaceMap';
//  import {
//    withStyles,
//    MuiThemeProvider,
//    createMuiTheme,
//  } from '@material-ui/core/styles';
//  import TextField from '@material-ui/core/TextField';
//  import Grid from '@material-ui/core/Grid';
//  import ChipInput from 'material-ui-chip-input';
//  import { withFormik } from 'formik';
//  import * as Yup from 'yup';
import NavBar from '../../components/NavBar/index';
import Footer from '../../components/Footer/index';
import MoreInfoButton from '../../components/MoreInfoButton/index';
import MoreInfoButtonLink from '../../components/MoreInfoButtonLink/index';
//  import More2 from './More2.png';
//  import More3 from './More3.png';
//  import More4 from './More4.png';
//  import More5 from './More5.png';
//  import More6 from './More6.png';
//  import More7 from './More7.png';

//  import YandexMapsContainer from '../../components/YandexMapsContainer/index';
//  import CouponHistory from '../../components/CouponHistory';
//  import GoodHistory from '../../components/GoodHistory';
// import messages from './messages';

const EnlargedImageOverlay = styled.div`
  z-index: 10002;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  opacity: 0.85;
  background-color: #000;
`;
const EnlargedImage = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  z-index: 10003;
  background: url(${props => props.src}) center;
  max-width: 63vw;
  max-height: 63vh;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  top: 13vh;

  -webkit-filter: drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.92));
  filter: drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.92));
`;

const CloseButton = styled.span`
  position: relative;
  left: 0px;
  top: 0px;
  width: 18px;
  height: 18px;

  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
  &:before,
  &:after {
    position: absolute;
    left: 9px;
    content: ' ';
    height: 18px;
    width: 4px;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
const CloseWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: -50px;
`;

const CouponInfoWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const BackGround = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  z-index: 1;
  display: flex;
  width: 100%;
  font-family: 'Century Gothic';
  font-size: 32px;
  flex-direction: column;

  background-color: #fcfcfc; /* The image used */
`;

const StyledBar = styled.div`
  width: 100%;
  position: fixed;

  left: 0px;
  top: 0px;
  z-index: 5;
`;
const StyledFooter = styled.div`
  width: 100%;
  align-self: flex-end;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: 'Century Gothic';
  font-size: 21px;
  text-decoration: none;
  color: black;

  justify-content: center;
  flex-wrap: wrap;
  line-height: 35px;
  margin-top: 50px;
  & > :nth-child(1) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  & > :nth-child(2) {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: -20px;
  }
`;

const MainImage = styled.img`
  margin-top: 3px;
  width: 350px;
  height: 201px;
  object-fit: cover;
`;

const Description = styled.div`
  width: 581px;

  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 170px;
  }
`;

const LowRow = styled.div`
  max-width: 1011px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: -0px -15px;
`;

const LowRowItem = styled.img`
  margin: 15px 15px;
  width: 137px;
  height: 100px;
  object-fit: cover;
  position: relative;
`;

const HoverImageWrapper = styled.div`
  &:hover .large {
    display: block;
  }
  display: flex;
`;

const ButtonWrap = styled.div`
  margin: 15px 5px;
  width: 100%;
  max-width: 460px;
`;

const ButtonLine = styled.div`
  margin: 0px 15px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LowRowPlaceholder = styled.div`
  margin: 15px 15px;
  width: 137px;
  height: 100px;
`;

/* const BottomPhotos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 8vh;
`; */
/* eslint-disable react/prefer-stateless-function */
export class MoreInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      images: [],
      href: '',
      popupImage: null,
    };
  }
  componentDidMount() {
    console.log('crap man', this.props.match.params.id);
    axios
      .get(
        'https://public-api.wordpress.com/rest/v1/sites/positano191751113.wordpress.com/posts/'.concat(
          this.props.match.params.id,
        ),
      )
      .then(res => {
        let imgs = [];
        console.log('data -', res.data);
        let href;
        const string = res.data.content;
        const regex = /<img.*?src="(.*?)"/g;
        let match = regex.exec(string);
        while (match) {
          const src = match[1];

          imgs.push(src);
          match = regex.exec(string);
        }

        const regexHref = /<a.*?href="(.*?)"/g;
        let matchHref = regexHref.exec(string);
        while (matchHref) {
          href = matchHref[1] ? matchHref[1] : '#';

          matchHref = regexHref.exec(string);
        }

        this.setState({
          post: res.data,
          images: imgs,
          href: href,
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    function removeUnicode(props) {
      return props.replace(/&nbsp;/g, '').replace(/\[Products\]/, '');
    }
    function removeUnicodeForSend(props) {
      return props.replace(/&.*?;/g, '').replace(/\[Products\]\s/, '');
    }
    const imgs = this.state.images;
    const ftrd = this.state.post.featured_image;
    return (
      <React.Fragment>
        {this.state.popupImage && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <EnlargedImageOverlay />
            <EnlargedImage src={this.state.popupImage}>
              <CloseWrapper>
                <CloseButton
                  onClick={() => {
                    this.setState({
                      popupImage: null,
                    });
                  }}
                />
              </CloseWrapper>
            </EnlargedImage>
          </div>
        )}
        <CouponInfoWrapper>
          <StyledBar>
            <NavBar />
          </StyledBar>
          {this.state.post.title && (
            <BackGround>
              <div
                style={{
                  height: '100%',
                  minHeight: '100vh',
                  flexDirection: 'column',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{ paddingTop: '120px' }}
                  dangerouslySetInnerHTML={{
                    __html: removeUnicode(this.state.post.title),
                  }}
                />

                <InfoWrapper>
                  <MainImage
                    src={this.state.post.featured_image}
                    alt="image"
                    onClick={() => {
                      this.setState({
                        popupImage: ftrd,
                      });
                    }}
                  />
                  <Description
                    dangerouslySetInnerHTML={{
                      __html: this.state.post.excerpt,
                    }}
                  />
                </InfoWrapper>
                <LowRow>
                  {this.state.images[0] ? (
                    <HoverImageWrapper>
                      <LowRowItem
                        src={this.state.images[0]}
                        alt="image"
                        onClick={() => {
                          this.setState({
                            popupImage: imgs[0],
                          });
                        }}
                      />
                    </HoverImageWrapper>
                  ) : (
                    <LowRowPlaceholder />
                  )}
                  {this.state.images[1] ? (
                    <HoverImageWrapper>
                      <LowRowItem
                        src={this.state.images[1]}
                        alt="image"
                        onClick={() => {
                          this.setState({
                            popupImage: imgs[1],
                          });
                        }}
                      />
                    </HoverImageWrapper>
                  ) : (
                    <LowRowPlaceholder />
                  )}
                  {this.state.images[2] ? (
                    <LowRowItem
                      src={this.state.images[2]}
                      alt="image"
                      onClick={() => {
                        this.setState({
                          popupImage: imgs[2],
                        });
                      }}
                    />
                  ) : (
                    <LowRowPlaceholder />
                  )}
                  {this.state.images[3] ? (
                    <LowRowItem
                      src={this.state.images[3]}
                      alt="image"
                      onClick={() => {
                        this.setState({
                          popupImage: imgs[3],
                        });
                      }}
                    />
                  ) : (
                    <LowRowPlaceholder />
                  )}
                  {this.state.images[4] ? (
                    <LowRowItem
                      src={this.state.images[4]}
                      alt="image"
                      onClick={() => {
                        this.setState({
                          popupImage: imgs[4],
                        });
                      }}
                    />
                  ) : (
                    <LowRowPlaceholder />
                  )}
                  {this.state.images[5] ? (
                    <LowRowItem
                      src={this.state.images[5]}
                      alt="image"
                      onClick={() => {
                        this.setState({
                          popupImage: imgs[5],
                        });
                      }}
                    />
                  ) : (
                    <LowRowPlaceholder />
                  )}
                  <ButtonLine>
                    <ButtonWrap>
                      <MoreInfoButton
                        background="#F8F8F8"
                        to={this.state.href}
                        color="black"
                      >
                        Сайт
                      </MoreInfoButton>
                    </ButtonWrap>
                    <ButtonWrap>
                      <MoreInfoButtonLink
                        background="#827568"
                        to={`/catalogue/${removeUnicodeForSend(
                          this.state.post.title,
                        )}`}
                        color="#FFFEFE"
                      >
                        Каталоги
                      </MoreInfoButtonLink>
                    </ButtonWrap>
                  </ButtonLine>
                </LowRow>
              </div>

              <StyledFooter>
                <Footer />
              </StyledFooter>
            </BackGround>
          )}
        </CouponInfoWrapper>
      </React.Fragment>
    );
  }
}

export default MoreInfoPage;
