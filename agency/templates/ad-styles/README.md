# Ad style templates — THALO

Bốn hướng tạo hình dùng để chốt visual style cho ad set đầu tiên. Mọi ảnh dùng
REF01 (`730d6cbd-4daa-4fd1-9850-8f734ba5151d`) làm `image_references` để chai và
nhãn Deep Moss (THALO / RICE GLOW SERUM / 30 ml) giữ y hệt packshot gốc. Chưa có
copy quảng cáo trên ảnh — các file này là style reference, không phải static ad
cuối.

Model: `nano_banana_pro`. Aspect ratio: `4:5`. Resolution: `2k`. Visual QA: chưa
inspect pixel.

| File | Mode | Mô tả | Job ID |
|---|---|---|---|
| `thalo-STYLE-A.png` | lifestyle-scene (bathroom-vanity) | "Morning Ritual" — chai trên kệ phòng tắm đá sáng màu, nắng sáng xiên qua cửa sổ, khăn linen, cành lá xanh. | `e1b6638e-91f8-41ff-a821-3546278c02ff` |
| `thalo-STYLE-B.png` | conceptual-product (sculptural + floating elements) | "Rice Minimal" — chai trên khối đá tròn, nền Sage Mist liền màu, vài hạt gạo rơi lơ lửng, bóng đổ sắc nét, nhiều khoảng trống. | `861b6caa-487c-4a30-8ca2-7a12397cbf5f` |
| `thalo-STYLE-C.png` | conceptual-product (surreal-environment / water surface) | "Dewy Texture" — chai nằm nghiêng trên mặt nước nông gợn sóng, giọt nước đọng trên thủy tinh, ánh sáng mát. | `d4187005-8d71-4990-8071-543fb873c547` |
| `thalo-STYLE-D.png` | closeup-product-with-person (hand-holding-vertical) | "In Hand" — bàn tay phụ nữ trưởng thành, móng tự nhiên, cầm chai đưa về phía máy, nền Rice White mờ, nhãn quay ra trước. | `3f151b77-dfd3-4448-bf83-7b9caba8bc15` |

Mỗi job ID có thể truyền thẳng dưới dạng `medias[].value` với role
`image_references` cho các lần generate sau (ví dụ: static feed 4:5 có copy
chồng lên).
