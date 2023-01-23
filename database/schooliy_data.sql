PGDMP                          {            schooliy    15.1    15.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16566    schooliy    DATABASE     �   CREATE DATABASE schooliy WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1255';
    DROP DATABASE schooliy;
                postgres    false            �            1259    16671    courses    TABLE     �   CREATE TABLE public.courses (
    courses_row integer NOT NULL,
    name character varying(255) NOT NULL,
    subjectid integer NOT NULL,
    usersid integer,
    pic character varying(255)
);
    DROP TABLE public.courses;
       public         heap    postgres    false            �            1259    16670    courses_courses_row_seq    SEQUENCE     �   CREATE SEQUENCE public.courses_courses_row_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.courses_courses_row_seq;
       public          postgres    false    217                       0    0    courses_courses_row_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.courses_courses_row_seq OWNED BY public.courses.courses_row;
          public          postgres    false    216            �            1259    16568    subjects    TABLE     �   CREATE TABLE public.subjects (
    subjectname character varying(255),
    rating integer,
    level character varying(255),
    subjectid integer NOT NULL,
    pics character varying(255),
    description text
);
    DROP TABLE public.subjects;
       public         heap    postgres    false            �            1259    16660    subjects_subjectid_seq    SEQUENCE     �   CREATE SEQUENCE public.subjects_subjectid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.subjects_subjectid_seq;
       public          postgres    false    214                       0    0    subjects_subjectid_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.subjects_subjectid_seq OWNED BY public.subjects.subjectid;
          public          postgres    false    215            �            1259    16688    users    TABLE     �   CREATE TABLE public.users (
    usersid integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    verification_question character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16687    users_usersid_seq    SEQUENCE     �   CREATE SEQUENCE public.users_usersid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_usersid_seq;
       public          postgres    false    219                       0    0    users_usersid_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_usersid_seq OWNED BY public.users.usersid;
          public          postgres    false    218            p           2604    16674    courses courses_row    DEFAULT     z   ALTER TABLE ONLY public.courses ALTER COLUMN courses_row SET DEFAULT nextval('public.courses_courses_row_seq'::regclass);
 B   ALTER TABLE public.courses ALTER COLUMN courses_row DROP DEFAULT;
       public          postgres    false    216    217    217            o           2604    16661    subjects subjectid    DEFAULT     x   ALTER TABLE ONLY public.subjects ALTER COLUMN subjectid SET DEFAULT nextval('public.subjects_subjectid_seq'::regclass);
 A   ALTER TABLE public.subjects ALTER COLUMN subjectid DROP DEFAULT;
       public          postgres    false    215    214            q           2604    16691    users usersid    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN usersid SET DEFAULT nextval('public.users_usersid_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN usersid DROP DEFAULT;
       public          postgres    false    219    218    219                      0    16671    courses 
   TABLE DATA           M   COPY public.courses (courses_row, name, subjectid, usersid, pic) FROM stdin;
    public          postgres    false    217   .                 0    16568    subjects 
   TABLE DATA           \   COPY public.subjects (subjectname, rating, level, subjectid, pics, description) FROM stdin;
    public          postgres    false    214   �                 0    16688    users 
   TABLE DATA           V   COPY public.users (usersid, name, email, password, verification_question) FROM stdin;
    public          postgres    false    219   �(                  0    0    courses_courses_row_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.courses_courses_row_seq', 204187, true);
          public          postgres    false    216                       0    0    subjects_subjectid_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.subjects_subjectid_seq', 8, true);
          public          postgres    false    215                       0    0    users_usersid_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_usersid_seq', 67, true);
          public          postgres    false    218            u           2606    16676    courses courses_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (courses_row);
 >   ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_pkey;
       public            postgres    false    217            s           2606    16663    subjects subjects_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.subjects
    ADD CONSTRAINT subjects_pkey PRIMARY KEY (subjectid);
 @   ALTER TABLE ONLY public.subjects DROP CONSTRAINT subjects_pkey;
       public            postgres    false    214            w           2606    16695    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (usersid);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    219            x           2606    16682    courses courses_subjectid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_subjectid_fkey FOREIGN KEY (subjectid) REFERENCES public.subjects(subjectid);
 H   ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_subjectid_fkey;
       public          postgres    false    214    217    3187            y           2606    16697    courses courses_usersid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_usersid_fkey FOREIGN KEY (usersid) REFERENCES public.users(usersid);
 F   ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_usersid_fkey;
       public          postgres    false    219    217    3191               C   x�3201�0��J,KN.�,(QP6�4�43��/�L.�GH��s���a(74���S9�c���� �*A         Z
  x�}XMs7=S���V��և�G�k�$�6��A�3��0���fN9�C����_�ҿ�_���!i�� ����ׯp*o�����g�B-����]�ǧ��ic���X�yTVȢ��V˨*!�8���B�ƻ��u��Bi�\(�2�kg��Q��y��ʥu�-�
݋�ΛJ|���b,�qv�����3!m%^�fSq�3�������JAG�j���lZ�he�`[s�ixC�j)o���ִ�s��2�&�R�j�H����Kg��1���Ɍ(�[僀%�(T��%�f�edl�	�U�mT9p�<�BLK���nM��.�b91�V����6ĉ���k2S7�`�ݠ��b�u�Ui�W/Ώ��K������8��믭�u)���ǔ���&���kUƉ�J��1�d�=�)�A�[[�D鄝�[5�PVzQ�Eh������8���縟)M���FQ�m\��6*Y'�e��6&��6*?���;	��u�o��J�% �����0^-Z#=��x�`�G�I<������� ���+ۚ�u���H�×��޻u\:;�y �[iKU�r��7\]���4/JR�I��A=X[�M��~���Y����F���3¼��,�рq�:\�:A��\=G�	m�.��ˣ�+�q.cC��$*�B�~LJg��*�KNq�}cv�(��L[����VbH�KʆY�L�E$F�] f6��^�C_*D�/[I�� �I��Ѧt���T��u��R�@(�ѐ�`=ݛ�?< 2�G�9�6|1���fK�[���,�0��?aF�����p���u{�����6���� �Gb6y?9]����x|�G�wݬ�����U�c|�9�REy �h|��������UR�7o���nQ����������X*�S$�22���a����#���Z?���|F��liW�NIF�q��7�{����l� ۙ��.����. 8E����9�xՎ��F	/�[tY0	Q��|N�WNP`{��@߭�
������W=J!�J�%e�dv|N���ϩxM\j�p��1zW��n��hs!�.^����|RmS��W��ޣ(g�$��h�h��ZE��H�X��[�#&����PSUZ��k#����u�����`�&��z�7\�M�	N�X������:�Y�~:%�νRp�(�յ�D��=Cٝ���E�*Zm�U��nw��Ƭ��	�6Be�S!{R�Ź*��?��5�݌�#ɡm-*ҁ�[]��Wbo8�VhiI4����*�R�p!>R�1+q��V��:s4�s�0y�L����= l�E��j�s����%ޢ�!�S�ƭ�dO������ʋ;uL{J�%y$c�%є(��d~Ǳ6��F`�K�}Fa�F��t��^oqN=�Ƣ�Z)�/|�S�W�v����v��L�^����C�Y�d�p|�z��Z��&�f)}3�,2U~߃7��a���m6��kwS��eD��mQ��ȉ��{4�kj�"��*p#��Z�V�����e]��C�gIɍ�=8�6���U�Pb(��9��n{%æI�t�	A�Q�&�/�hkq�K}2'^�t��gh.�u
�xf����vm��0���Q�$f'GGOF��!�;�]<>y�B�/�G�O��1G�/zv�����@?}��x����	�b�V�X�hg��G�P{�  Re��;�1Gl�+��2�����` 򨗿$�����6�]�&�C$�����&W}��I�(�h���uԠ�7��-��tv�v���-�5��~�T���x.qe��ĖS���	/[����J̨HߵF��4Jg�wg�M����uv�= +"+�W�(�61��wA�\I�2ۮ��i;	�����):=��x"m	�}�yQ,ܤ�+��M<疜K=���b��~���5���fAnRSQ���D%��a��<	م��q�~	}� ��A�3oedg�&�,T�d(�ߧ��b��f *��a���9G#�@�}1��x�}D���ҙ�`ӚRߧ�4�,oX"�)���z=%�*�M�$���z= M^�Pd>SSo�Z�C���]�\^,��ɧԒ! ��� K\�c���t����8!~;z�9�_yps'L��;��+���Z���t��R��������$ ���2�8�&*Mp"��"�rIO�H/�o��a��5~��y�C������/|�����DX���Vi�	
[�����i`'���W�~3����A���I���Bv��jI�=�|��ǣ��W�Vj���oT8(|��x�d����k��W���myM:�mN/�]�q;��ы柚~� ��؅�ږ 6��J�\�5�������4�2qP��ט��:sM�r�����\��i��|�9$Nt;g^�[�Dl��
;ƭ2@l�]�fio�fK>�i��m��5~��T)�t_A6��Iɫ9�2h�y���Ѐ[��ގr���:��7W�٤�r��w�6w����U�s�Y�d ֆ���$�.07ⴆ#cˉ���-Ɨ���'��Р����������s,�ߤpq~L�������
�����s���T_݉dzyxp���too�9Q�,         �
  x�m�Ǯ�H����E�1�&�h�	�L����K/��ec!Y:���NU�����z��O\�i����7��Ǟ?NksPn_;�1!�ƫr�:Z3
�n��S2͙���[rϔ���?�=u���L� �e�E��R|����.ͷG��r-%�ּ�������Ч{]�C�W �'>���-E���A2�1Y�_��	#1IN�.�>�	4��x��dp*�c��.�IFN��d ����ZqN}�_�
�3��r�ȿ �[M7{��v��O2zB'�7��\��V?�A��0  ��(YØ��܆���)M̻Qr��v�w��O2v�~'�m&f��}�1��jl�� ����-K�Ѳ�/s'���v�|�I�O��d��q�0K��
U�%ڙ�Ejk(�US����u:���c=��(����d�I&N���3�A$, �K��m�Zd�Y5/M+BGP$���9����GvQ`��$�'�w���7���Z�Y�$�T���u���	�1ԛ��� ��V������$_N���!4�7]챱��ٔO25d��D��1Eݤ
Z}x�4��Hm��`d�� �w6�Zo�(�_���IPC4sl�()�D�ݠ=e��+����Da�.�_�+����x�@x�U`�1� j\.�c	���u!�;��1�L�������B�	:��(U�E	�~Y�K>�¶�T���e�M�]x&�	5���~.��M"����� s��Qf�dKE��#U�����>����>�'�~���eW+wٛŵ�����v��S�*��e��'?��-~)l�k����Nj�[�t��i\
:�h���nӧ���r�e�q��B.�0��7��(sY�+�#��x�vt RrL�G^$�<h1o
}�t�Sno�pk����4�SL<v��D�-�4�4;��
b��?7ô&-�s[�{�W!\�`Jn���
����go&מ�T
��ˎ*F�����Q�=~^!*)}��D8MiY�9CbY���]��rm*���\�������a`�pz��(;���M�j*���i�'#��Kds�v|��_�(�Jgp����\��v��U��5}_���1���]ׯ]k#�˵����x�KM�����=��B�H3�R�<'}>�O.Q
��Ҵ���w\7��x�Qݚ�',�O�*�.���}�>:�ʞ�Lj8�&k�6�q��
�\���?H�z��ĺޛC��p�/s7�Q0��������#[h�Y\���\����R�;��a{�U�}��w�J��T�ba�	���l��������7�kc�.s�q����ϯSNg=�UC�0�ѿ�̷�������jh��q�s��\>p�11���S�j"��(����i�[��N~���]z���ø�*ts�6|��1��G?���-/_ÒQ��4�M���w�u	��$&�]���w�;��\>p��E��$$5�U�H�� ��R�X�>�g�8����h�.��Bv�n.�Ƃ\��CBl���x�i�7i�>C���;��I�<�po�$�t�����rm,��e� 	�Ļw2,i`�)�����I���
�x�j3�.�a��ٛ˵���c/����#������ �+!=P�1���`��e�G�h?��˵����g[�{F�Q�� ��Y��u��q᪙����3$����$^����<���u=���@�PP[!���w7)� �C�@�L��3�-��Tr�=�2]��N>��rm,���Y>�b�EP_:��pƅ5D�3h�ߪ�����X_3�s����wٛ˵����ضft����R]U�j�I��[�����7���9�G��$(����rm,��%˙�0��"s+(.^#�@s��d(2Γ�����HF\�Qv���rm,��e[�hSZ�3i�'�l��0@]�i��)�Ɍ�g�D�%�1zŕKw{��\9pɓ��2ϧL-y\jF�J51��U�?��A*,�!Oe�@^�0��3�m.��B\j=���Ǻ����(u���)&�B���Y�����v��-�k?&�˵�Уs��1��� :�<x��*��Y�2ӫ� �I&�@x�\lxw��6�kc�.�[�'��>>LK~]c+С�I��D���,7>���&���xo.��B\�����1hZ^���PC�T����X�]�g_��/��3����;;��rm,��%�0s�E�2#�4UΪ����&�>��2+$��ݑ!����ؿw��Ry�ҵ�ԧ?i��ֵzJr<9���
bdS��!��uТ�V���>��rm,�����Q��z���]�`�ՋZ?��r�k>������2Ĭ��m�@�~.7�kc�.���������r�߁4��𔭄2-�oM��!�#R~�wc�o.��B\�EsN����ʏ�w~�<{�qG*�~��WҮ�==�穎�����:�7�kc�.�qi�wO�+0hf���?F��Fu;,^�q�T�L_�K�fܮ�����X�KD��IZ�L+G���$�zI�%x��̽�T�����D��N������X؁Kz�`��H�vmW�%0�=���1�����¹���^6��ٝ}p�ԗa^���������ty��0De��]㱪���"Do:r����E�s	�����z2�����ܯ�g ؞N�i��\�Fz�@!b�� W�G���{��F1`�[�F�*cO[��"N���_�_��i���������~���D���Z��a�QB<��9��3=v���������������     