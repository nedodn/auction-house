import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { action, computed, observable, observe, when } from "mobx";
import BigNumber from "bignumber.js";
import { colors } from "../styles";
import styled from "react-emotion";

const Title = styled("div")`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: normal;
  color: ${colors.darkGrey};
`;

const Content = styled("div")`
  font-size: ${props => (props.small ? 14 : 40)}px;
  font-weight: bold;
`;

@inject("auctionStore")
@inject("store")
@observer
export default class AuctionYourBid extends Component {
  render() {
    const { currentAccountBid, userHasParticipated } = this.props.auctionStore;
    const ethBid = this.props.store.web3.fromWei(currentAccountBid, "ether");
    return (
      <div>
        <Title>Your Bid</Title>
        {userHasParticipated ? (
          <Content>{ethBid.toNumber()} ETH</Content>
        ) : (
          <Content small>You haven't placed a bid yet.</Content>
        )}
      </div>
    );
  }
}
