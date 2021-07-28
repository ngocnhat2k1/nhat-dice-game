<div align="center">Luật chơi Game</div>

- Ô input Final Score: Số điểm đạt được khi cộng dồn giá trị, nếu User nào đặt được tới số điểm đó trước thì đó là người chiến thắng

- Button Roll Dice: Nút để tiến hành xoay xúc sắc
  - Mỗi lần nhất nút -> Random ngẫu nhiên 2 con số từ 1 -> 6
  - Nếu vô tình xoay phải số 1 hoặc số 6 -> Mất lượt chơi
  - Đổi lượt chơi cho User bên cạnh
    - Nếu User 1 đang chơi thì chuyển sang User 2
    - Nếu User 2 đang chơi thì chuyển sang User 1

  - Nếu xoay phải số điểm khác 1 và khác 6 thì người chơi có 2 quyền lựa chọn
    - Hoặc là xoay tiếp để cộng dồn thêm điểm
      - Cộng dồn vào điểm trong lượt chơi hiện tại (Đừng nhầm với điểm tổng trong ô màu xanh)
    - Hoặc là nhấn và nút "HOLD" để lấy điểm về
      - Sẽ lấy điểm chơi của lượt hiện tại -> Cộng dồn vào điểm tổng
      - Khi cộng dồn xong thì đổi lượt chơi cho User kế tiếp

- Để bắt đầu chơi thì phải nhấn vào Button "NEW GAME"
  - Khi nhấn nút NEW GAME thì User 1 là người chơi đầu tiên
  - Điểm tổng và điểm tạm thời Reset về lại số 0

- User nào đang ở trong lượt chơi thì sẽ có class:
  - `player-panel active`

- User nào chiến thắng thì sẽ có class:
  - `player-panel winner`
  - Sủa lại tên player name thành chữ "Winner"

- Làm sao để biết ai là người thắng??
  - So sánh điểm tổng với điểm Final Store được nhập ở trong Input