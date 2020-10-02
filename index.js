import React from "react";
import { Card, Button, Row, Col, Alert } from "antd";

export function BeProWidget(props) {
  const { data = {}, onClick = () => {} } = props;

  const onSendBack = () => {
    const newData = {};

    Object.entries(data).forEach(([key, val]) => {
      newData[key] = `${val}_widget`;
    });

    onClick(newData);
  };

  return (
    <Card title="Widget Content" style={{ width: 500 }}>
      <Row gutter={[20, 20]}>
        {Object.keys(data).length > 0 && (
          <Col span={24}>
            <Alert
              message={<pre>{JSON.stringify(data, null, 2)}</pre>}
              type="info"
            />
          </Col>
        )}

        <Col span={24}>
          <Button type="primary" onClick={onSendBack}>
            Sent info back
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default BeProWidget;
