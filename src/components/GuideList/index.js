import React from "react";
import styled from "styled-components";
import {object} from "prop-types";

const GuideDiv = styled.div``;

const GuideList = () => <GuideDiv />;

GuideList.propTypes = {
  guides: object,  //eslint-disable-line
};

export default GuideList;
