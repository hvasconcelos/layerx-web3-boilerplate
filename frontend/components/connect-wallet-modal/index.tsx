import React, { useState } from "react";
import { useWeb3 } from "../../hooks/useWeb3";
import Image from "next/image";
import { Modal, ModalFooter, Button } from "@taikai/rocket-kit";
import { ConnectorList,Warning, Connector, Agreement, AddressStyle}  from "./styles"
import useAddress from "../../hooks/useAddress";

type OnCloseFunctionType = () => void;

interface Props {
  onClose: OnCloseFunctionType;
}

const ShowEthAddress = ()=> {
  const { address = "" } = useAddress();
  return (
    <AddressStyle>
      {address}
  </AddressStyle>
  );
}

const ConnectWalletModal: React.FC<Props> = (props: Props) => {
  const { connected, connect, disconnect, error } = useWeb3();
 
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
          <Warning>
            You don&apos;t have a wallet connect, please choose of the following
            options:
          </Warning>
          <ConnectorList>
            <Connector onClick={() => connect()}>
              <Image width={30} height={30} alt="Metamask" src="/metamask.png" />
              <span>Connect with Metamask</span>
            </Connector>
          </ConnectorList>
          <Agreement>
            By connecting a wallet, you agree to the "Name" Terms of Service and
            consent to its Privacy Policy.
          </Agreement>
        </>
      )}
      {connected && (
        <>
        <Warning>
          You are connected with Wallet address:
        </Warning>
        <ShowEthAddress />
        </>
      )}
      <ModalFooter closeValue={connected?"Close":"Cancel"} closeAction={() => onClose()}>
        {connected && 
          <Button
            color={"red500"}
            disabled={!connected}
            value="Disconnect"
            action={() => disconnect()}
          />
        }
        
      </ModalFooter>
    </Modal>
  );
};

export default ConnectWalletModal;
