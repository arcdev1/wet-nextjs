import styled from "@emotion/styled";
import React from "react";
import {
  Main,
  PageTitle,
  Alert,
  LinkButton,
  Button,
  InputButton,
  SubmitButton,
  ButtonSize,
  Row,
  AlertLink,
  FormGroup,
  FormInput,
  FormLabel,
  Panel,
} from "../components";

const Official = styled.p`
  margin-bottom: 20px;
  margin-top: -10px;
`;

export default function Home() {
  return (
    <Main>
      <PageTitle>WET NextJS (React) PoC</PageTitle>
      <p>
        A proof of concept for integrating WET with NextJS, React, and
        TypeScript.
      </p>
      <Panel titleText="Forms">
        <a
          href="https://wet-boew.github.io/wet-boew-styleguide/design/forms-en.html"
          target="_blank"
        >
          <Official>See official wet-boew version</Official>
        </a>
        <form role="form">
          <FormGroup>
            <FormLabel htmlFor="requiredField" requiredText="required">
              Required
            </FormLabel>
            <FormInput id="requiredField" type="text" required />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="optionalField">Optional</FormLabel>
            <FormInput id="optionalField" type="text" />
          </FormGroup>
        </form>
      </Panel>
      <Panel titleText="Buttons">
        <a
          href="https://wet-boew.github.io/wet-boew-styleguide/design/buttons-en.html"
          target="_blank"
        >
          <Official>See official wet-boew version</Official>
        </a>
        <Row>
          <div className="col-sm-3">
            <h3>Default</h3>
            <hr />
            <p>
              <button type="submit">Button</button>
            </p>
            <p>
              <input type="button" value="Input" />
            </p>
            <p>
              <input type="submit" value="Submit" />
            </p>
            <p>
              <a href="#">Link</a>
            </p>
          </div>
          <div className="col-sm-3">
            <h3>Styled</h3>
            <hr />
            <p>
              <Button type="submit" variant="default">
                Button
              </Button>
            </p>
            <p>
              <InputButton variant="default" value="Input" />
            </p>
            <p>
              <SubmitButton variant="default" value="Submit" />
            </p>
            <p>
              <LinkButton variant="default">Link</LinkButton>
            </p>
          </div>
          <div className="col-sm-3">
            <h3>Colourful</h3>
            <hr />
            <p>
              <Button type="button" variant="default">
                Default
              </Button>
            </p>
            <p>
              <Button type="button" variant="primary">
                Primary
              </Button>
            </p>
            <p>
              <Button type="button" variant="success">
                Success
              </Button>
            </p>
            <p>
              <Button type="button" variant="info">
                Info
              </Button>
            </p>
            <p>
              <Button type="button" variant="warning">
                Warning
              </Button>
            </p>
            <p>
              <Button type="button" variant="danger">
                Danger
              </Button>
            </p>
          </div>
          <div className="col-sm-3">
            <h3>Sizing</h3>
            <hr />
            <p>
              <Button type="button" variant="default" sizing={ButtonSize.LARGE}>
                Large Button
              </Button>
            </p>
            <p>
              <Button
                type="button"
                variant="default"
                sizing={ButtonSize.DEFAULT}
              >
                Regular Button
              </Button>
            </p>
            <p>
              <Button type="button" variant="default" sizing={ButtonSize.SMALL}>
                Small Button
              </Button>
            </p>
            <p>
              <Button
                type="button"
                variant="default"
                sizing={ButtonSize.EXTRA_SMALL}
              >
                Extra Small Button
              </Button>
            </p>
          </div>
        </Row>
      </Panel>
      <Panel titleText="Alerts">
        <a
          href="https://wet-boew.github.io/wet-boew-styleguide/design/alerts-en.html"
          target="_blank"
        >
          <Official>See official wet-boew version</Official>
        </a>
        <Row>
          <div className="col-sm-4">
            <Alert variant="success">
              <h3>Title</h3>
              <p>Success alert with title.</p>
            </Alert>
          </div>
          <div className="col-sm-4">
            <Alert variant="success">
              <p>Success alert with no title.</p>
            </Alert>
          </div>
          <div className="col-sm-4">
            <Alert variant="success">
              <p>
                Success alert with <AlertLink href="#">link</AlertLink>.
              </p>
            </Alert>
          </div>
        </Row>
        <Row>
          <div className="col-sm-4">
            <Alert variant="info">
              <h3>Title</h3>
              <p>Info alert with title.</p>
            </Alert>
          </div>
          <div className="col-sm-4">
            <Alert variant="info">
              <p>Info alert with no title.</p>
            </Alert>
          </div>
          <div className="col-sm-4">
            <Alert variant="info">
              <p>
                Info alert with <AlertLink href="#">link</AlertLink>.
              </p>
            </Alert>
          </div>
        </Row>
        <Row>
          <div className="col-sm-4">
            <Alert variant="warning">
              <h3>Title</h3>
              <p>Warning alert with title.</p>
            </Alert>
          </div>
          <div className="col-sm-4">
            <Alert variant="warning">
              <p>Warning alert with no title.</p>
            </Alert>
          </div>
          <div className="col-sm-4">
            <Alert variant="warning">
              <p>
                Warning alert with <AlertLink href="#">link</AlertLink>.
              </p>
            </Alert>
          </div>
        </Row>
        <Row>
          <div className="col-sm-4">
            <Alert variant="danger">
              <h3>Title</h3>
              <p>Danger alert with title.</p>
            </Alert>
          </div>
          <div className="col-sm-4">
            <Alert variant="danger">
              <p>Danger alert with no title.</p>
            </Alert>
          </div>
          <div className="col-sm-4">
            <Alert variant="danger">
              <p>
                Danger alert with <AlertLink href="#">link</AlertLink>.
              </p>
            </Alert>
          </div>
        </Row>
      </Panel>
      <Panel titleText="Panels">
        <a
          href="https://wet-boew.github.io/wet-boew-styleguide/design/panels-en.html"
          target="_blank"
        >
          <Official>See official wet-boew version</Official>
        </a>
        <Row>
          <div className="col-sm-3">
            <Panel titleText="Header" footerText="Footer">
              Default Panel with header & footer.
            </Panel>
          </div>
          <div className="col-sm-3">
            <Panel footerText="Footer">Default Panel with footer.</Panel>
          </div>
          <div className="col-sm-3">
            <Panel titleText="Header">Default Panel with header.</Panel>
          </div>
          <div className="col-sm-3">
            <Panel>Simple Default Panel.</Panel>
          </div>
        </Row>
        <Row>
          <div className="col-sm-3">
            <Panel titleText="Header" footerText="Footer" variant="info">
              Info Panel with header & footer.
            </Panel>
          </div>
          <div className="col-sm-3">
            <Panel footerText="Footer" variant="info">
              Info Panel with footer.
            </Panel>
          </div>
          <div className="col-sm-3">
            <Panel titleText="Header" variant="info">
              Info Panel with header.
            </Panel>
          </div>
          <div className="col-sm-3">
            <Panel variant="info">Simple Info Panel.</Panel>
          </div>
        </Row>
        <Row>
          <div className="col-sm-3">
            <Panel titleText="Header" footerText="Footer" variant="success">
              Success Panel with header & footer.
            </Panel>
          </div>
          <div className="col-sm-3">
            <Panel footerText="Footer" variant="success">
              Success Panel with footer.
            </Panel>
          </div>
          <div className="col-sm-3">
            <Panel titleText="Header" variant="success">
              Success Panel with header.
            </Panel>
          </div>
          <div className="col-sm-3">
            <Panel variant="success">Simple Success Panel.</Panel>
          </div>
        </Row>
        <Row>
          <div className="col-sm-3">
            <Panel titleText="Header" footerText="Footer" variant="warning">
              Warning Panel with header & footer.
            </Panel>
          </div>
          <div className="col-sm-3">
            <Panel footerText="Footer" variant="warning">
              Warning Panel with footer.
            </Panel>
          </div>
          <div className="col-sm-3">
            <Panel titleText="Header" variant="warning">
              Warning Panel with header.
            </Panel>
          </div>
          <div className="col-sm-3">
            <Panel variant="warning">Simple Warning Panel.</Panel>
          </div>
        </Row>
        <Row>
          <div className="col-sm-3">
            <Panel titleText="Header" footerText="Footer" variant="danger">
              Danger Panel with header & footer.
            </Panel>
          </div>
          <div className="col-sm-3">
            <Panel footerText="Footer" variant="danger">
              Danger Panel with footer.
            </Panel>
          </div>
          <div className="col-sm-3">
            <Panel titleText="Header" variant="danger">
              Danger Panel with header.
            </Panel>
          </div>
          <div className="col-sm-3">
            <Panel variant="danger">Simple Danger Panel.</Panel>
          </div>
        </Row>
      </Panel>
    </Main>
  );
}
