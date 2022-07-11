import * as S from "./Privacy.styles";
import { IPrivacyPresenter } from "./Privacy.types";

export default function PrivacyPresenter(props: IPrivacyPresenter) {
  return (
    <S.Wrapper>
      <S.AgreementTitleInner>
        <S.AgreementTitleBox onClick={props.BackMyMove}>
          <S.Img src="/images/myArrow.svg" alt="뒤로가기" />
          <S.AgreementTitle>개인정보 처리방침</S.AgreementTitle>
        </S.AgreementTitleBox>
      </S.AgreementTitleInner>
      <S.AgreementTextBox>
        <S.AgreementText>
          개인정보 수집 및 이용 안내
          <br /> 주식회사 다배(이하 “회사”)는 회원님의 개인정보를 보호하기 위해
          최선을 다하고 있습니다. 이를 위해서 회사는 개인정보의 보호와 관련하여
          ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’, ‘개인정보 보호법’ 등
          개인정보와 관련된 법령을 준수하고 있습니다.
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          1. 수집하는 개인정보의 항목 회사는 이름, 이메일, 나이, 성별, 서비스
          이용기록, 결제 및 환불 기록, 생년월일, 휴대폰번호, 관심분야 등에 관한
          정보를 수집합니다.
          <br /> 서비스를 이용하는 과정에서 방문일시, 사용이력, 기기정보,
          접속로그, IP주소 등이 자동으로 생성·수집 될 수 있습니다.
          <br />
          회사는 회원가입, 구매 등 서비스 제공을 위한 최소한의 범위 내에서
          이용자의 동의 하에 개인정보를 수집하며, 수집한 모든 개인정보는 고지한
          목적 범위 내에서만 이용됩니다.
          <br /> 1) 회원 가입 시<br /> - (필수) 아이디(E-MAIL), 비밀번호,
          휴대폰번호, 닉네임 <br />- (선택) 생년월일, 성별, 연계정보(CI) <br />
          2) 판매 회원 가입 시 <br />- (필수) 호스트명, 이름, 아이디, 비밀번호,
          E-MAIL, 사업자등록번호, 주민등록증, 담당자 이름, 휴대폰번호, 주소,
          호스트 약력, 은행명, 예금주, 계좌번호 <br />- (선택) 호스트등록경로,
          프로필 사진 <br />
          3) 상품 구매 시 <br />- (필수) 핸드폰번호, 신용카드 정보, 은행계좌
          정보, 결제기록 등의 정보 <br />- (선택) 배송지 정보: 수령인, 연락처,
          주소지 <br />- (선택) 탑승자 이름, 동반인정보(성명, 이외 서비스의
          유형에 따라, 추가적인 정보가 수집될 수 있습니다. (여행상품) <br />
          4) 모바일 사용 시 <br />- 프립 앱 버전, OS버전 (iOS, 안드로이드){" "}
          <br />- 위치정보 (별도 저장없이 앱에서 사용) <br />
          5) 기타 <br />- 서비스 이용과정에서 자동 수집 정보 : 회원ID, IP
          Address, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록, 기기정보,
          ADID, IDFA, 위치정보 <br />
          -고객 분쟁처리 및 상담 진행 시 : 상담내역, 채팅(대화)내역, 서비스
          이용기록, 결제 및 환불 기록 <br />
          6) 구독회원 <br />- E-MAIL, 성별
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          2. 개인정보의 수집 및 이용목적
          <br />
          회사는 회원의 식별·확인, 회원가입 의사 확인, 중복가입 여부 확인,
          만14세 미만 여부 확인, 법정대리인의 동의 처리, 계약의 체결·이행·관리,
          주문상품의 배송 상태 통지, 결제 및 환불, 통계분석, 구매 성향 분석,
          서비스 개선, 민원 기타 문의 사항 처리, 부정이용에 대한 조사 및 대응,
          고지사항 전달, 청구서 등의 발송, 법령상 의무 이행, 사은/판촉행사 등
          각종 이벤트, 개인 맞춤형 서비스 제공, 새로운 상품 기타 행사 관련 정보
          안내 및 마케팅 활동, 이메일 초대권 활용 내역 조회, 회사 및 제휴사
          상품/서비스 안내 및 권유의 목적으로 개인정보를 이용합니다.
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          3. 개인정보 수집 방법 <br />
          회사는 홈페이지, 어플리케이션, 고객센터, 게시판, 이벤트 참여,
          제휴사로부터의 전달 등을 통해 개인정보를 수집합니다.
          <br />
          이용자는 회사가 마련한 개인정보 처리 동의서에 대해 「동의」 버튼을
          클릭함으로써 개인정보 처리에 대하여 동의 여부를 표시할 수 있습니다.
          <br />
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          4. 개인정보의 보유 및 이용기간 <br />
          귀하가 제공한 개인정보는 법령에서 별도로 정하거나 귀하와 별도 합의하는
          등의 특별한 사정이 없는 한 회사가 제공하는 서비스를 받는 동안 또는
          위에서 정한 목적을 달성할 때까지 회사가 보유ㆍ이용하게 됩니다.
          <br /> 회사는 관련 법령(아래의 경우에 한정되지 않습니다)의 규정에
          의하여 보존하여야 하는 기록은 일정 기간 보관 후 파기합니다.
          <br /> 가. 계약 또는 청약철회 등에 관한 기록 (보존기간 : 5년) :
          전자상거래 등에서의 소비자 보호에 관한 법률 <br />
          나. 대금결제 및 재화 등의 공급에 관한 기록 (보존기간 : 5년) :
          전자상거래 등에서의 소비자 보호에 관한 법률 <br />
          다. 소비자의 불만 또는 분쟁처리에 관한 기록 (보존기간 : 3년) :
          전자상거래 등에서의 소비자 보호에 관한 법률 라. 홈페이지 방문에 관한
          기록 (보존 기간: 3개월) : 통신비밀보호법
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          5. 개인정보 제 3자 제공 회사는 계약의 이행을 위하여 최소한의
          개인정보만 제공하고 있으며, 개인정보를 제3자에게 제공해야 하는 경우
          사전에 이용자에게 해당 사실을 알리고 동의를 구하도록 하겠습니다. 다만
          다음의 경우는 예외로 하고 있습니다.
          <br /> 가. 서비스 제공에 따른 요금정산을 위해 필요한 경우 <br /> 나.
          법령의 규정에 의한 경우 <br /> 다. 수사 목적으로 법령에 정해진 절차와
          방법에 따라 수사기관의 요구가 있는 경우 회사가 제공하는 서비스를
          통하여 주문 및 결제가 이루어진 경우 상담 등 거래 당사자간 원활한
          의사소통 및 발송 등 거래이행을 위하여 관련된 정보를 필요한 범위 내에서
          거래 당사자에게 제공합니다.
          <br />
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          제공받는 자 : 호스트 <br /> 제공하는 항목 : 이름, 성별, 나이, 연락처,
          의류 사이즈, 배송지 정보(수령인, 연락처, 주소지) 등 개별 프로그램별로
          필요하여 회원이 입력한 정보 <br />
          제공받는 자의 이용목적 : 본인 확인, 프로그램 준비 및 이행, 민원처리,
          상품(서비스), 발송(전송), 제품 설치, 반품, 환불, 고객상담 등
          정보통신서비스제공계약 및 전자상거래(통신판매) 계약의 이행을 위해
          필요한 업무 <br /> 보유 및 이용기간 : 상품 제공 완료 후 6개월
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          제공받는 자 : 회원 <br /> 제공하는 항목 : 호스트명, 이름, 연락처,
          주소, 집결지 등 호스트가 입력한 정보 <br /> 제공받는 자의 이용목적 :
          본인 확인, 프로그램 준비 및 이행, 민원처리, 상품(서비스), 발송(전송),
          제품 설치, 반품, 환불, 고객상담 등 정보통신서비스제공계약 및
          전자상거래(통신판매) 계약의 이행을 위해 필요한 업무 <br /> 보유 및
          이용기간 : 상품 제공 완료 후 6개월
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          6. 개인정보의 처리 위탁 <br /> 회사는 서비스 향상을 위해서 아래와 같이
          개인정보를 위탁하고 있으며, 관계 법령에 따라 위탁계약 시 개인정보가
          안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다. 수탁자 및
          수탁업무 내용은 아래와 같습니다.
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          수탁자 : 나이스페이, 다날, 아임포트, 페이코, 토스 <br /> 수탁업무 :
          결제
          <br />
          수탁자 : 다날 수탁업무 : 본인확인 수탁자 : braze <br /> 수탁업무 :
          마케팅
          <br />
          자동화 솔루션 수탁자 : Sendbird <br />
          수탁업무 : 고객 상담(대화 내용)
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          7. 이용자의 권리 <br /> 회사는 이용자(만 14세 미만자인 경우에는
          법정대리인)의 권리를 다음과 같이 보호하고 있습니다.
          <br /> 가. 이용자는 언제든지 자신의 개인정보 또는 법정대리인의 경우 만
          14세 미만자의 개인정보를 조회하고 수정하는 등 법령이 정한 권리를
          행사할 수 있습니다.
          <br /> 나. 이용자는 언제든지 개인정보 처리의 정지를 요청할 수 있으며,
          법률에 특별한 규정이 있는 등의 경우에는 처리정지 요청을 거부할 수
          있습니다.
          <br /> 다. 이용자는 언제든지 ‘회원탈퇴’등을 통해 개인정보의 수집 및
          이용 동의를 철회할 수 있습니다.
          <br /> 라. 개인정보의 수정을 요청하는 경우 회사는 정확한 개인정보의
          이용 및 제공을 위해 수정이 완료될 때까지 이용자의 개인정보는
          이용하거나 제공하지 않습니다.
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          8. 개인정보 파기절차 및 방법 <br />
          회사는 원칙적으로 이용자의 개인정보를 회원 탈퇴 시 지체없이 파기하고
          있습니다.
          <br /> 단, 4. 개인정보의 보유 및 이용기간에 따라 이용자에게 개인정보
          보관기간에 대해 별도의 동의를 얻은 경우, 또는 법령에서 일정 기간
          정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게
          보관합니다.
          <br /> 회원탈퇴, 서비스 종료, 이용자에게 동의받은 개인정보 보유기간의
          도래와 같이 개인정보의 수집 및 이용목적이 달성된 개인정보는 재생이
          불가능한 방법으로 파기하고 있습니다. 법령에서 보존의무를 부과한 정보에
          대해서도 해당 기간 경과 후 지체없이 재생이 불가능한 방법으로
          파기합니다.
          <br /> 전자적 파일 형태의 경우 복구 및 재생이 되지 않도록 기술적인
          방법을 이용하여 안전하게 삭제하며, 출력물 등은 분쇄하거나 소각하는
          방식 등으로 파기합니다.
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          9. 개인정보보호를 위한 기술적·관리적 조치 <br />
          회사는 이용자의 개인정보를 처리함에 있어 정보의 분실, 도난, 누출,
          외부로부터의 공격, 해킹 등을 방지하고 최상의 안전성을 확보하기 위하여
          다음 각호의 방식을 포함하여 법령에서 정한 보호조치를 취하고 있습니다.
          <br /> 가. 이용자의 개인정보는 비밀번호에 의해 보호되며, 파일 및 전송
          데이터를 암호화하여 중요한 데이터는 별도의 보안기능을 통해 보호되고
          있습니다.
          <br /> 나. 회사는 컴퓨터 바이러스에 의한 피해가 발생하지 않도록
          백신프로그램을 이용하고 있으며, 백신프로그램에 대한 주기적인
          업데이트하고 있습니다.
          <br /> 다. 회사는 암호 알고리즘을 이용하여 네트워크 상의 개인정보를
          안전하게 전송할 수 있는 보안장치를 채택하고 있습니다.
          <br /> 라. 해킹 등에 의해 이용자의 개인정보가 유출되는 것을 방지하기
          위해, 외부침입을 차단하는 보안장치를 이용하고 있으며, 침입탐지시스템을
          설치하여 불법적인 침입을 감시하고 있습니다.
          <br />
          마. 이용자의 개인정보를 처리하는 담당인원을 최소한으로 제한하며, 관련
          직원에 대해서는 지속적인 보안교육의 실시와 함께 본 정책의 준수여부를
          수시로 점검하고 있습니다.
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          10. 개인정보 자동 수집 <br />
          장치의 설치/운영 및 거부에 관한 사항 회사는 이용자의 정보를 자동으로
          저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다.
          <br /> 쿠키란 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에
          보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에
          저장됩니다.
          <br /> 가. 쿠키 등 사용 목적 로그인 식별/고객님의 사용 기록/기존
          홈페이지 방문 또는 앱 사용 회수 파악 등을 통한 개인 맞춤 서비스 제공
          등을 위해 쿠키를 운용합니다. 이용자는 쿠키 설치에 대한 선택권을 가지고
          있습니다.
          <br /> 나. 쿠키 설정 거부 방법 쿠키 설정을 거부하는 방법으로는
          회원님이 사용하시는 앱이나 웹 브라우저의 옵션을 선택함으로써 모든
          쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의
          저장을 거부할 수 있습니다.
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          11. 홈페이지 개인정보 보호책임자 <br />
          회사는 이용자의 개인정보에 대한 개인정보 보호책임자를 지정하여
          개인정보보호를 위해 최선을 다하겠습니다.
          <br /> 현재 회사의 개인정보 보호책임자는 아래와 같습니다.
          <br /> - 성명 : 홍성표 <br />- 소속 : 서비스개발팀 <br />- 직위 : CTO
          <br />- E-mail : aa@aaa.com <br />- 연락처 : 02-123-4567
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에
          문의하시기 바랍니다.
          <br /> ▶ 개인정보 침해신고센터 <br />- 홈페이지 : privacy.kisa.or.kr
          <br />- 연락처 : (국번없이) 118, privacy@kisa.or.kr
          <br />- 주소 : (05717) 서울특별시 구로구 디지털로 300 지밸리비즈플라자
          13층 한국인터넷진흥원 개인정보침해신고센터 <br />▶ 대검찰청
          사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr) <br />▶ 경찰청
          사이버안전국 : (경찰청 대표)182 (www.netan.go.kr)
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          12. 개인정보처리방침의 적용 제외 <br />
          회사는 이용자에게 홈페이지를 통하여 다른 회사의 웹사이트 또는 자료에
          대한 링크를 제공할 수 있습니다. 이 경우 회사는 외부사이트 및 자료에
          대하여 통제권이 없을 뿐만 아니라 이들이 개인정보를 수집하는 행위에
          대하여 회사의 개인정보처리방침이 적용되지 않습니다. 따라서, 회사가
          포함하고 있는 링크를 클릭하여 타 사이트의 페이지로 이동할 경우에는
          새로 방문한 사이트의 개인정보처리방침을 반드시 확인하시기 바랍니다.
        </S.AgreementText>
      </S.AgreementTextBox>
      <S.AgreementTextBox>
        <S.AgreementText>
          13. 시행시기 본 개인정보처리방침은 2022년 7월 1일부터 시행됩니다.
        </S.AgreementText>
      </S.AgreementTextBox>
    </S.Wrapper>
  );
}
