import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      즐거운 여행이 되었으면 좋겠습니다! 😆
      <br />© 2023 *SunJae Tour* , Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer