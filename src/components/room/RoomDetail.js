import React from "react";
import "./RoomDetail.css";
import { FormattedMessage } from "react-intl";

function RoomDetail({ room }) {
  return (
    <div>
      <table>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>
            <FormattedMessage id="device" />
          </th>
          <th>
            <FormattedMessage id="value" />
          </th>
        </tr>

        {room.devices.map((device, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <td>{device.id}</td>
              <td>{device.name}</td>
              <td>{device.desired.value}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default RoomDetail;
