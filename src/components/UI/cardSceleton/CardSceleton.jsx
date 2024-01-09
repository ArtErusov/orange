import React from "react"
import ContentLoader from "react-content-loader"

const CardSceleton = (props) => (
  <ContentLoader 
    speed={2}
    width={237}
    height={484}
    viewBox="0 0 237 484"
    backgroundColor="#e6e6e6"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <rect x="3" y="260" rx="3" ry="3" width="56" height="20" /> 
    <rect x="1" y="292" rx="3" ry="3" width="70" height="26" /> 
    <rect x="5" y="333" rx="3" ry="3" width="195" height="15" /> 
    <rect x="9" y="7" rx="0" ry="0" width="214" height="240" /> 
    <rect x="68" y="261" rx="3" ry="3" width="56" height="20" /> 
    <rect x="134" y="261" rx="3" ry="3" width="56" height="20" /> 
    <rect x="6" y="356" rx="3" ry="3" width="195" height="15" /> 
    <rect x="5" y="379" rx="3" ry="3" width="195" height="15" /> 
    <rect x="36" y="439" rx="0" ry="0" width="168" height="39" />
  </ContentLoader>
)

export default CardSceleton;