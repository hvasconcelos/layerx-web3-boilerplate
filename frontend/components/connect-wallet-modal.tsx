import React, { useState } from "react";
import { useWeb3 } from "../hooks/useWeb3";
import Image from "next/image";
import { Modal, ModalFooter } from "@taikai/rocket-kit";
import styled from "styled-components";

type OnCloseFunctionType = () => void;

interface Props {
  onClose: OnCloseFunctionType;
}

const ConnectorList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Connector = styled.div`
  display: flex;
  border: 1px solid #AAA;
  padding: 15px 10px;
  cursor: pointer;
  &:hover {
    background: #DDD;
  }
  span {
    margin-left: 15px;
    position: relative;
    top: 4px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #000;
  }
`;

const Warning = styled.div `
  margin-bottom: 20px;
  color: #444;
`;

const Agreement = styled.div `
  margin-top: 15px;
  color: #777;
  text-style: italic;
  font-size: 1.0rem;
`;

const ConnectWalletModal: React.FC<Props> = (props: Props) => {
  const { connected, disconnect, error } = useWeb3();
  const { onClose } = props;
  return (
    <Modal
      zIndex={1001}
      isShowing={true}
      hide={() => {
        onClose();
      }}
      title="Connect Your Wallet"
      footer={false}
    >
      {!connected && (
        <>
        <Warning>You dont have a wallet connect, please choose of the following options:</Warning>     
        <ConnectorList>
          <Connector onClick={() => console.log("Vamos")}>
            <Image width={30} height={30} src="/metamask.png" />
            <span>Connect with Metamask</span>
          </Connector>
        </ConnectorList>
        <Agreement>
          By connecting a wallet, you agree to the "Name" Terms of Service and consent to its Privacy Policy.
        </Agreement>
        </>
      )}

      <ModalFooter
        closeValue={"Cancel"}
        closeAction={() => onClose()}
      ></ModalFooter>
    </Modal>
  );
};

export default ConnectWalletModal;
